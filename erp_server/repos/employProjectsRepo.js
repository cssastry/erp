const employProjectsModel = require("../models/employProjectsModel");

const getById = (id) => {
    return employProjectsModel.find({employId: id});
};

const add = (data) => {
    let newData = new employProjectsModel(data);
    return newData.save();
};

module.exports = {
    getById,
    add,
};