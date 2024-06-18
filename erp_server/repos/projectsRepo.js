const projectsModel = require("../models/projectsModel");

const get = () => {
    return projectsModel.find();
};

const add = (data) => {
    const newProject = new projectsModel(data);
    return newProject.save();
};

const updateById = (id, data) => {
    return projectsModel.findOneAndUpdate({_id: id}, {$set: data})
};

const deleteById = (id) => {
    return projectsModel.findOneAndDelete({_id: id});
};

module.exports = {
    get,
    add,
    updateById,
    deleteById,
};