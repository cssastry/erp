const projectDetailsModel = require("../models/projectDetailsModel");

const getById = (id) => {
    return projectDetailsModel.find({ projectId: id });
}

const add = (data) => {
    let newProjectDetails = new projectDetailsModel(data);
    return newProjectDetails.save();
};

const deleteById = (id) => {
    return projectDetailsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getById,
    add,
    deleteById
}