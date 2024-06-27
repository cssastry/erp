const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentIST() {
    const dateUTC = new Date();
    const ISTOffset = 330; // IST is UTC+5:30
    const ISTTime = new Date(dateUTC.getTime() + (ISTOffset * 60000));
    return ISTTime;
};

const rolelkpModel = new Schema({
    title: {
        type: String,
    },
    departmentId: {
        type: mongoose.Types.ObjectId,
        ref: 'departments',
    }
}, {
    timestamps: {
        currentTime: getCurrentIST
    }
});

module.exports = mongoose.model("rolelkp", rolelkpModel);