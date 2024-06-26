const holidaysModel = require("../models/holidaysModel");

const getAll = () => {
    return holidaysModel.find();
};

const add = (data) => {
    let newData = new holidaysModel(data);
    return newData.save();
};
const updateById = (id, data) => {
    return holidaysModel.findOneAndUpdate({ _id: id }, { $set: data });

}
const deleteById = (id) => {
    return holidaysModel.findOneAndDelete({ _id: id });
}


module.exports = {
    getAll,
    add,
    updateById,
    deleteById
};