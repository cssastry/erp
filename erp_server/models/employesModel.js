const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const employeesModel = new Schema({
    employeeId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    },
    password: {
        type: String,
    },
    netPay: {
        type: Number,
    },
    address: {
        type: String
    },
    accountNumber: {
        type: String,
    },
    title: {
        type: String,
    },
    roleId: {
        type: mongoose.Types.ObjectId,
        ref: 'rolelkp'
    },
    status: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("employees", employeesModel);