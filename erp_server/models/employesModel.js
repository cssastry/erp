const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const employesModel = new Schema({
    employId : {
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
},{timestamps: {
    currentTime: getCurrentIST
}});

    module.exports = mongoose.model("employees", employesModel);