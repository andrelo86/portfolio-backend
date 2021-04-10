// Require Mongoose
let mongo = require('mongoose');

let Schema = mongo.Schema;
const jobDataSchema = new Schema({
    organization: {
        type: String, required: [true, "can't be blank"],
      },
      description: {
        type: String, required: [true, "can't be blank"],
      },
});

let JobData = mongo.model("Model", jobDataSchema, "jobData");
module.exports = JobData;