const skillsModel = require("../models/skillsModel");

const getAll = () => {
    return skillsModel.find();
};

const getById = (id) => {
    return skillsModel.find({ _id: id });
};

const add = (data) => {
    newLeave = new skillsModel(data);
    return newLeave.save();
};

const update = (id, data) => {
    return skillsModel.findOneAndUpdate({ _id: id }, { $set: data });
};

const deleteById = (id) => {
    return skillsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteById,
};