const rolelkpModel = require("../models/rolelkpModel");


const getAll = () => {
    return rolelkpModel.find().populate("departmentId");
};
const getRolesByDepId = (id) => {
    return rolelkpModel.find({ departmentId: id }).populate("departmentId");

}
const add = (data) => {
    let roles = new rolelkpModel(data);
    return roles.save();
};
const updateById = (id, title) => {
    return rolelkpModel.findOneAndUpdate({ _id: id }, { $set: title });
};
const deleteById = (id) => {
    return rolelkpModel.findOneAndDelete({ _id: id });
};

module.exports = {
    getAll,
    getRolesByDepId,
    add,
    updateById,
    deleteById
}