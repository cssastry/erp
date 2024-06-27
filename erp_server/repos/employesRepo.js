const employesModel = require("../models/employesModel");

const get = () => {
    return employesModel.find({}, { _id: 0, password: 0, createdAt: 0, updatedAt: 0, __v: 0 }).populate("roleId");
};

const add = (data) => {
    const employData = new employesModel(data);
    return employData.save();
};

const getById = (id) => {
    console.log("Email: ", id)
    return employesModel.find({ email: id }, { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 }).populate("roleId");
};

const updateById = (id, data) => {
    return employesModel.findOneAndUpdate({ employId: id }, { $set: data });
};

const deleteById = (id) => {
    return employesModel.findOneAndDelete({ employId: id });
};
const findEmpIdForHexa = () => {
    return employesModel.find({}, { employeeId: 1, _id: 0 }).sort({ _id: -1 }).limit(1);
}
module.exports = {
    get,
    add,
    getById,
    updateById,
    deleteById,
    findEmpIdForHexa
};