const leavesModel = require("../models/leavesModel");

const getAll = () => {
    return leavesModel.find();
};

const getById = (id) => {
    return leavesModel.find({ employeeId: id });
};

const add = (data) => {
    newLeave = new leavesModel(data);
    return newLeave.save();
};

const update = (id, data) => {
    return leavesModel.findOneAndUpdate({ _id: id }, { $set: data });
};

const deleteById = (id) => {
    return leavesModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
};