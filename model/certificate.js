const mongoose = require('mongoose');
const { Schema } = mongoose


const certificateSchema = new Schema({
   project:{type: Schema.Types.ObjectId,ref: "Project",},
   certificate_no:String,

});


module.exports = mongoose.model("Certificate", certificateSchema);
