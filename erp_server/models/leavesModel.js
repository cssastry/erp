const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const leavesModel = new Schema({
    employId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    status: {
        type: Number,
        default: 0,
    }
},{timestamps: {
    currentTime: getCurrentIST
}});

module.exports = mongoose.model("leaves", leavesModel);