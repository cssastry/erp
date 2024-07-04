const fs = require('fs');
const path = require('path');

const getImageBase64 = async (filePath) => {
    try {
        const data = await fs.promises.readFile(filePath);
        return data.toString('base64');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
};

module.exports = {
    getImageBase64,
};
