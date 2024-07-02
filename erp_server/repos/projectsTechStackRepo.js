const projectTechStackModel = require("../models/projectTechStackModel");

const getAll = () => {
    return projectTechStackModel.find().populate("techStackId");
};

const getById = (id) => {
    return projectTechStackModel.find({ projectId: id }).populate("techStackId");
};

const add = (data) => {
    newLeave = new projectTechStackModel(data);
    return newLeave.save();
};

const deleteById = (id) => {
    return projectTechStackModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getById,
    add,
    deleteById,
};