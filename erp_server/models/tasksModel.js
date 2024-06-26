const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const tasksModel = new Schema({
    assignedId: {
        type: String,
        required: true,
    },
    assigneeId: {
        type: String,
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: Number,
    },

},
    {
        timestamps: {
            currentTime: getCurrentIST
        }
    });

module.exports = mongoose.model("tasks", tasksModel);