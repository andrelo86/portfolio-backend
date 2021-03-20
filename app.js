let express = require('express');
let app = express();
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');

const { mongoose } = require('./public/config/db.ts');
const bodyParser = require('body-parser');

// Load middleware
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

//MODELS
var JobData = require('./public/model/jobDataModel.ts');

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

/**
 * GET /jobData
 * Purpose: Get all jobDatas
 */
app.get('/api/description', (req, res) => {  
    JobData.find(req.query)
        .then((jobData) => {
            console.log(jobData);
            res.send(jobData);
        }).catch((e) => {
            res.send(e);
        });
})

module.exports = app;
