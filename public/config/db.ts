let encoder = require("crypto-js");
let mongoose = require('mongoose');
let pino = require('pino');

let config = require('./dbcredentials.json');
let credentials = encoder.AES.decrypt(config.db.mongoCredentials, 'secret key 123').toString(encoder.enc.Utf8);
let logger = pino();

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${credentials}@${config.db.dbName}.jvjmv.mongodb.net/${config.db.dbName}?${config.db.configParams}`, { useNewUrlParser: true }).
    then(() => {
        logger.info("Connected to MongoDB successfully :)");
    }).catch((e) => {
        logger.info("Error while attempting to connect to MongoDB");
        logger.info(e);
    });

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };