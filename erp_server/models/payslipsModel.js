const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const paySlipsModel = new Schema({
    employId : {
        type: String,
    },
    netPay: {
        type: Number,
    },
    basicPay: {
        type: Number,
    },
    payDate: {
        type: String,
    },
    workingDays: {
        type: Number,
    },
    daysWorked: {
        type: Number,
    },
    lossOfDays: {
        type: Number,
    },
    payPerDay: {
        type: Number,
    },
    gross: {
        type: Number,
    },
    HRA: {
        type: Number,
    },
    OA: {
        type: Number,
    },
    EPF: {
        type: Number,
    },
    PF: {
        type: Number,
    },
    LOP: {
        type: Number,
    },
    deductions: {
        type: Number,
    },
    netPayable: {
        type: Number,
    },
    paySlip: {
        type: String,
    },
}, {timestamps: {
    currentTime: getCurrentIST
}});

module.exports = mongoose.model("payslips", paySlipsModel);