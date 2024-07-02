const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require("formidable");
const { getImageBase64 } = require("../utils/base64imageconverter");
const projectsRepo = require("../repos/projectsRepo");
const uploadDir = path.join(__dirname, '..', 'uploads');


const getAll = async (req, res) => {
    try {
        let projects = await projectsRepo.get();

        if (projects) {
            for (let project of projects) {
                if (project.logo) {
                    const logoFileName = path.basename(project.logo);
                    const logoPath = path.join(uploadDir, logoFileName);
                    if (fs.existsSync(logoPath)) {
                        project.logo = await getImageBase64(logoPath);
                    } else {
                        console.log(`Current directory contents:`);
                        try {
                            const files = await fs.promises.readdir(uploadDir);
                        } catch (error) {
                            console.error(`Error reading directory: ${error}`);
                        }
                    }
                }
            }
            res.status(200).send({
                success: true,
                message: "Projects fetched successfully",
                data: projects,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching projects",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const add = async (req, res) => {
    const form = new formidable.IncomingForm();
    const uploadDir = path.join(__dirname, '..', 'uploads');
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {

        if (err) {
            console.log('Error parsing the form:', err);
            return res.status(500).send({
                success: false,
                message: "Error parsing the form",
            });
        }

        const logoFile = files.logo[0];

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const sanitizedFilename = logoFile.originalFilename.replace(/\s+/g, '-');
        const newFilePath = path.join(uploadDir, `${uniqueSuffix} - ${sanitizedFilename}`);

        // Rename and move the file
        fs.rename(logoFile.filepath, newFilePath, (err) => {
            if (err) {
                console.log('Error moving the file:', err);
                return res.status(500).send({
                    success: false,
                    message: "Error saving the uploaded file",
                });
            }
            // Ensure fields are properly cast to strings
            const incomingData = {
                title: Array.isArray(fields.title) ? fields.title[0] : fields.title,
                startDate: Array.isArray(fields.startDate) ? fields.startDate[0] : fields.startDate,
                client: Array.isArray(fields.client) ? fields.client[0] : fields.client,
                summary: Array.isArray(fields.summary) ? fields.summary[0] : fields.summary,
                logo: newFilePath,
            };
            try {
                let data = projectsRepo.add(incomingData);
                if (data) {
                    return res.status(200).send({
                        success: true,
                        message: "Project added successfully",
                        data: data,
                    });
                } else {
                    return res.status(204).send({
                        success: false,
                        message: "Error while adding project",
                    });
                }
            } catch (error) {
                console.log("Exception caught while adding project:", error);
                return res.status(500).send({
                    success: false,
                    message: "Internal server error",
                });
            }
        });
    });
};

// const updateById = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let updatedData = await projectsRepo.updateById(id, req.body);
//         if (updatedData) {
//             res.status(200).send({
//                 success: true,
//                 message: "Project updated successfully",
//             });
//         } else {
//             res.status(500).send({
//                 success: false,
//                 message: "Error in updating project",
//             });
//         };
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Internal server error",
//         });
//     };
// };

const updateById = async (req, res) => {
    try {
        let id = req.params.id;

        // Get the uploaded file path if any
        let logoPath = req.file ? req.file.path : req.body.logo;

        // Update the project data with the new logo path if applicable
        let updatedData = { ...req.body, logo: logoPath };

        let updateData = await projectsRepo.updateById(id, updatedData);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Project updated successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error in updating project",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    };
};

const deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await projectsRepo.deleteById(id);
        if (data) {
            res.status(200).send({
                success: true,
                message: "project deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting project",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    };
};

module.exports = {
    getAll,
    add,
    // add: [upload.single('logo'), add],  // Use multer middleware for add
    updateById,
    // updateById: [upload.single('logo'), updateById],  // Use multer middleware for updateById
    deleteById,
};