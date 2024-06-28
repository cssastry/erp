const projectDetailsModel = require("../models/projectDetailsModel");


const getAll = () => {
    return projectDetailsModel.find();
};
const add = (data) => {
    let newProjectDetails = new projectDetailsModel(data).populate("projectId");
    return newProjectDetails.save();
};
const updateById = (id, title) => {
    return projectDetailsModel.findOneAndUpdate({ _id: id }, { $set: title });
};
const deleteById = (id) => {
    return projectDetailsModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    add,
    updateById,
    deleteById
}