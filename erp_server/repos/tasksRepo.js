const tasksModel = require("../models/tasksModel");

const getAll = () => {
    return tasksModel.find().populate("projectId");
};

const getById = (id) => {
    return tasksModel.find({ assignedTo: id }).populate("projectId");
};

const add = (data) => {
    newLeave = new tasksModel(data);
    return newLeave.save();
};

const update = (id, data) => {
    return tasksModel.findOneAndUpdate({ _id: id }, { $set: data });
};

const deleteById = (id) => {
    return tasksModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
};