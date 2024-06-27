const departmentsModel = require("../models/departmentsModel");


const getAll = () => {
    return departmentsModel.find();
};
const add = (data) => {
    let departments = new departmentsModel(data);
    return departments.save();
};
const updateById = (id, title) => {
    return departmentsModel.findOneAndUpdate({ _id: id }, { $set: title });
};
const deleteById = (id) => {
    return departmentsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    add,
    updateById,
    deleteById
}