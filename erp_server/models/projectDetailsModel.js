const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const projectDetailsModel = new Schema({
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: "projects"
    },
    title: {
        type: String,
    },
    file: {
        type: String
    },
},
    {
        timestamps: {
            currentTime: getCurrentIST
        }
    });

module.exports = mongoose.model("projectdetails", projectDetailsModel);