// Require Mongoose
let mongo = require('mongoose');

// Schemas
let Schema = mongo.Schema;
const jobDataSchema = new Schema({
    organization: String,
    description: String
});

let JobData = mongo.model("Model", jobDataSchema, "jobData");
module.exports = JobData;