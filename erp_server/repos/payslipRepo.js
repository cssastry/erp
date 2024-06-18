const payslipModel = require("../models/payslipsModel");

const getById = (id) => {
    return payslipModel.find({employId: id})
}

const add = (data) => {
    const newPayslip = new payslipModel(data);
    return newPayslip.save();
};

const deleteById = (id) => {
    return payslipModel.findOneAndDelete({employId: id});
};

module.exports = {
    getById,
    add,
    deleteById,
};