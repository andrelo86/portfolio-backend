// Require Mongoose
let mongo = require('mongoose');

let Schema = mongo.Schema;
const jobDataSchema = new Schema({
    organization: String,
    description: String
});

let JobData = mongo.model("Model", jobDataSchema, "jobData");
module.exports = JobData;