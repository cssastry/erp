const sprintsModel = require("../models/sprintsModel");

const get = () => {
    return sprintsModel.find().populate("projectId");
};

const add = (data) => {
    const newSprint = new sprintsModel(data);
    return newSprint.save();
};

const updateById = (id, data) => {
    return sprintsModel.findOneAndUpdate({ _id: id }, { $set: data })
};

const deleteById = (id) => {
    return sprintsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    get,
    add,
    updateById,
    deleteById,
};