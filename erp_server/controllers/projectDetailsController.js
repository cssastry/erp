const projectDetailsRepo = require("../repos/projectDetailsRepo");
const path = require('path');
const fs = require('fs');
const formidable = require("formidable");
const uploadDir = path.join(__dirname, '..', 'uploads');
const fileuploader = require('../utils/fileUploader');
const { getImageBase64 } = require("../utils/fileToBase64Converter");



const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let projectDetails = await projectDetailsRepo.getById(id);

        if (projectDetails && projectDetails.length > 0) {
            for (let projectDetail of projectDetails) {
                if (projectDetail.file) {
                    const filePathName = path.basename(projectDetail.file);
                    const filePath = path.join(uploadDir, filePathName);
                    if (fs.existsSync(filePath)) {
                        projectDetail.file = await getImageBase64(filePath);
                    } else {
                        console.log(`Current directory contents:`);
                        try {
                            const files = await fs.promises.readdir(uploadDir);
                            console.log(files);
                        } catch (error) {
                            console.error(`Error reading directory: ${error}`);
                        }
                    }
                }
            }
            res.status(200).send({
                success: true,
                message: "project details fetched successfully",
                data: projectDetails,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while fetching project details",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}


const add = async (req, res) => {
    const form = new formidable.IncomingForm();
    const uploadDir = path.join(__dirname, '..', 'uploads');
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        try {
            const incomingData = await fileuploader.addfile(err, fields, files);
            console.log("incomingData: ", incomingData);

            let data = await projectDetailsRepo.add(incomingData);
            if (data) {
                return res.status(200).send({
                    success: true,
                    message: "Project file added successfully",
                    data: data,
                });
            } else {
                return res.status(204).send({
                    success: false,
                    message: "Error while adding project file",
                });
            }
        } catch (error) {
            console.log("Exception caught while adding project file:", error);
            return res.status(500).send({
                success: false,
                message: "Internal server error",
            });
        }
    });
}


const deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let deleteData = await projectDetailsRepo.deleteById(id);
        if (deleteData) {
            res.status(200).send({
                success: true,
                message: "Department deleted successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while deleting the department",
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    };
};

module.exports = {
    getById,
    add,
    deleteById,
}