const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    __v: {
        type: Number
    },
    date: {
        type: Date
    }
});

const Champions = mongoose.model("Champions", championSchema);

module.exports = Champions;
