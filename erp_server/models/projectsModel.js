const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const projectsModel = new Schema({
    title: {
        type: String,
    },
    summary: {
        type: String,
    },
    client: {
        type: String,
    },
    startDate: {
        type: String,
    },
    logo: {
        type: String,
    },
}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("projects", projectsModel);