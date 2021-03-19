let encoder = require("crypto-js");
const mongoose = require('mongoose');

let credentials = encoder.AES.decrypt('U2FsdGVkX19wMymnqEBWGLGF1SrplhF6YyI2G4ry5Pj1jvcVJ6Th07JxG9y7+td6', 'secret key 123').toString(encoder.enc.Utf8);

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${credentials}@portfolio.jvjmv.mongodb.net/portfolio?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports =  { mongoose };