const projectDetailsRepo = require("../repos/projectDetailsRepo");
const path = require('path');
const fs = require('fs');
const formidable = require("formidable");
const uploadDir = path.join(__dirname, '..', 'uploads');



// const getAll = async (req, res) => {
//     try {
//         let newProjectDetails = await projectDetailsRepo.getAll();
//         if (newProjectDetails) {
//             res.status(200).send({
//                 success: true,
//                 message: "Project's fetched successfully",
//                 data: newProjectDetails,
//             });
//         } else {
//             res.status(204).send({
//                 success: false,
//                 message: "Error while fetching project's",
//             });
//         };
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Internal Server error",
//         });
//     };
// };

// const add = async (req, res) => {
//     try {
//         let addData = await projectDetailsRepo.add(req.body);

//         if (addData) {
//             res.status(200).send({
//                 success: true,
//                 message: "Department's added successfully",
//             });
//         } else {
//             res.status(204).send({
//                 success: false,
//                 message: "Error while adding department's",
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

const getAll = async (req, res) => {
    try {
        let newProjectDetails = await projectDetailsRepo.getAll();
        if (newProjectDetails) {
            // Modify each project detail to include the full URL to the file
            newProjectDetails = newProjectDetails.map(projectDetail => {
                if (projectDetail.file) {
                    projectDetail.file = `${req.protocol}://${req.get('host')}${projectDetail.file}`;
                }
                return projectDetail;
            });

            res.status(200).send({
                success: true,
                message: "Projects fetched successfully",
                data: newProjectDetails,
            });
        } else {
            res.status(204).send({
                success: false,
                message: "No projects found",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server error",
        });
    }
};

const add = () => {
    const form = new formidable.IncomingForm();
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
        const projectDocument = files.projectFile[0];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const sanitizedFilename = projectDocument.originalFilename.replace(/\s+/g, '-');
        const newFilePath = path.join(uploadDir, `${uniqueSuffix} - ${sanitizedFilename}`);
        fs.rename(projectDocument.filepath, newFilePath, (err) => {
            if (err) {
                console.log('Error moving the file:', err);
                return res.status(500).send({
                    success: false,
                    message: "Error saving the uploaded file",
                });
            }
            // Ensure fields are properly cast to strings
            const incomingData = {
                id: Array.isArray(fields.projectId) ? fields.projectId[0] : fields.projectId,
                projectFile: newFilePath,
            };
            try {
                let data = projectDetailsRepo.add(incomingData);
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
    })
}

const updateById = async (req, res) => {
    try {
        let id = req.params.id;
        let updateData = await projectDetailsRepo.update(id, req.body);
        if (updateData) {
            res.status(200).send({
                success: true,
                message: "Department updated successfully",
            });
        } else {
            res.status(204).send({
                success: false,
                message: "Error while updating department",
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
    getAll,
    add,
    updateById,
    deleteById,
}