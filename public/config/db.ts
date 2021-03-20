let encoder = require("crypto-js");
const mongoose = require('mongoose');

let config = require('./dbcredentials.json');
let credentials = encoder.AES.decrypt(config.db.mongoCredentials, 'secret key 123').toString(encoder.enc.Utf8);

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${credentials}@${config.db.dbName}.jvjmv.mongodb.net/${config.db.dbName}?${config.db.configParams}`, { useNewUrlParser: true }).
    then(() => {
        console.log("Connected to MongoDB successfully :)");
    }).catch((e) => {
        console.log("Error while attempting to connect to MongoDB");
        console.log(e);
    });

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };