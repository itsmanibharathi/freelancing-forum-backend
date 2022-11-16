
const mongoose = require('mongoose');
const { Schema } = mongoose


const studyprojectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github:{
        type: String,
    },
    technology_used: {
        type: [String],
    },
    created_on: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model("StudyProject", studyprojectSchema);
