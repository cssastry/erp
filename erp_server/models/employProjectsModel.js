const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const employeeProjectsModel = new Schema({
    employeeId: {
        type: String,
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: "projects",
    },
}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("employeeProjects", employeeProjectsModel);