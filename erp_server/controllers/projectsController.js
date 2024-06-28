// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs').promises;

const projectsRepo = require("../repos/projectsRepo");

// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Directory to store uploaded files
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

// const getImageBase64 = async (filePath) => {
//     try {
//         const imageBuffer = await fs.readFile(filePath);
//         return imageBuffer.toString('base64');
//     } catch (error) {
//         console.log('Error converting image to base64:', error);
//         return null;
//     }
// };



const getAll = async (req, res) => {
    try {
        let projects = await projectsRepo.get();
        if (projects) {
            res.status(200).send({
                success: true,
                message: "Projects fetched successfully",
                data: projects,
            });
        } else {
            res.status(500).send({
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
    };
};
// const getAll = async (req, res) => {
//     try {
//         let projects = await projectsRepo.get();
//         if (projects) {
//             for (let project of projects) {
//                 if (project.logo) {
//                     project.logo = await getImageBase64(path.join(__dirname, '..', project.logo));
//                 }
//             }
//             res.status(200).send({
//                 success: true,
//                 message: "Projects fetched successfully",
//                 data: projects,
//             });
//         } else {
//             res.status(500).send({
//                 success: false,
//                 message: "Error while fetching projects",
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Internal server error",
//         });
//     };
// };
const add = async (req, res) => {
    try {
        let data = await projectsRepo.add(req.body);
        if (data) {
            res.status(200).send({
                success: true,
                message: "Project added successfully",
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Error while adding project",
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

// const add = async (req, res) => {
//     try {
//         // Get the uploaded file path
//         let logoPath = req.file ? req.file.path : null;

//         // Create the project data with the logo path
//         let projectData = { ...req.body, logo: logoPath };

//         let data = await projectsRepo.add(projectData);
//         if (data) {
//             res.status(200).send({
//                 success: true,
//                 message: "Project added successfully",
//             });
//         } else {
//             res.status(500).send({
//                 success: false,
//                 message: "Error while adding project",
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
        let updatedData = await projectsRepo.updateById(id, req.body);
        if (updatedData) {
            res.status(200).send({
                success: true,
                message: "Project updated successfully",
            });
        } else {
            res.status(500).send({
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

// const updateById = async (req, res) => {
//     try {
//         let id = req.params.id;

//         // Get the uploaded file path if any
//         let logoPath = req.file ? req.file.path : req.body.logo;

//         // Update the project data with the new logo path if applicable
//         let updatedData = { ...req.body, logo: logoPath };

//         let updateData = await projectsRepo.updateById(id, updatedData);
//         if (updateData) {
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
            res.status(500).send({
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