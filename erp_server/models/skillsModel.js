const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const skillsModel = new Schema({
    skillName: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("skills", skillsModel);   