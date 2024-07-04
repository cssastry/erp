const path = require('path');
const fs = require('fs');
const formidable = require("formidable");
const uploadDir = path.join(__dirname, '..', 'uploads');

const addfile = (err, fields, files) => {
    return new Promise((resolve, reject) => {
        if (err) {
            console.log('Error parsing the form:', err);
            return reject({
                success: false,
                message: "Error parsing the form",
            });
        }

        const projectDocument = files.projectFile[0];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const sanitizedFilename = projectDocument.originalFilename.replace(/\s+/g, '-');
        const newFilePath = path.join(uploadDir, `${uniqueSuffix}-${sanitizedFilename}`);

        fs.rename(projectDocument.filepath, newFilePath, (err) => {
            if (err) {
                console.log('Error moving the file:', err);
                return reject({
                    success: false,
                    message: "Error saving the uploaded file",
                });
            }

            const incomingData = {
                projectId: fields.projectId[0],
                title: fields.title[0],
                file: newFilePath,
            };


            resolve(incomingData);
        });
    });
}

module.exports = {
    addfile
}
