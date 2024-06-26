const employeeskillModel = require("../models/employeeskillModel");

const get = () => {
    return employeeskillModel.find({});
};

const add = (data) => {
    const employData = new employeeskillModel(data);
    return employData.save();
};

const getById = (id) => {
    return employeeskillModel.find({ employId: id });
};

const updateById = (id, data) => {
    return employeeskillModel.findOneAndUpdate({ employId: id }, { $set: data });
};

const deleteById = (id) => {
    return employeeskillModel.findOneAndDelete({ employId: id });
};
// to delete particular skill for the selected employee_id
const deleteBySkill = (id, skill) => {
    return employeeskillModel.findOneAndDelete({ employId: id, skill: skill });
}

module.exports = {
    get,
    add,
    getById,
    updateById,
    deleteById,
    deleteBySkill
};