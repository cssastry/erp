const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const tasksModel = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    points: {
        type: Number,
    },
    priority: {
        type: Number,
    },
    createdBy: {
        type: String
    },
    assignedTo: {
        type: String
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: "projects"
    },
    type: {
        type: String
    },
    // sprintId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "sprints"
    // },
    sprintId: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 0
    },

},
    {
        timestamps: {
            currentTime: getCurrentIST
        }
    });

module.exports = mongoose.model("tasks", tasksModel);