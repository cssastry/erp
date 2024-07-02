const employeeTechStackModel = require("../models/employeeTechStackModel");

const getAll = () => {
    return employeeTechStackModel.find().populate("techStackId");
};

const getById = (id) => {
    return employeeTechStackModel.find({ employeeId: id }).populate("techStackId");
};

const add = (data) => {
    newLeave = new employeeTechStackModel(data);
    return newLeave.save();
};

const deleteById = (id) => {
    return employeeTechStackModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getById,
    add,
    deleteById,
};