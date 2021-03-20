let express = require('express');
let app = express();
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let jobDataRouter = require('./routes/jobDataRouter.js');

const { mongoose } = require('./public/config/db.ts');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', jobDataRouter);

module.exports = app;
