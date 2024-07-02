const techStackModel = require("../models/techStackModel");

const getAll = () => {
    return techStackModel.find();
};

const add = (data) => {
    newStack = new techStackModel(data);
    return newStack.save();
};

const updateById = (id, title) => {
    return techStackModel.findOneAndUpdate({ _id: id }, { $set: title });
};

const deleteById = (id) => {
    return techStackModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    add,
    updateById,
    deleteById,
};