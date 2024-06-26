const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const employeeskillModel = new Schema({
    employeeId: {
        type: String,
        required: true,
    },
    skill: {
        type: mongoose.Types.ObjectId,
        ref: "skills"
    },

}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("employeeSkills", employeeskillModel);