const departmentsModel = require("../models/departmentsModel");

// Function to get all departments from the database
const getAll = () => {
    return departmentsModel.find();
};

// Function to add a new department to the database
const add = (data) => {
    let departments = new departmentsModel(data);
    return departments.save();
};

// Function to update an existing department by its ID
const updateById = (id, title) => {
    return departmentsModel.findOneAndUpdate({ _id: id }, { $set: title });
};

// Function to delete a department by its ID
const deleteById = (id) => {
    return departmentsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    add,
    updateById,
    deleteById
};
