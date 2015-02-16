/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
//var compress = require('compression');
//var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var logger = require('morgan');
var port = process.env.PORT || 7200;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(compress());            // Compress response data with gzip
//app.use(cors());                // enable ALL CORS requests
app.use(logger('dev'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(errorHandler.init);

routes = require('./routes/index')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment){
    case 'production':
        console.log('** PRODUCTION ON AZURE **');
        process.chdir('./../../');
        app.use('/', express.static('./build/stage/'));
        // app.use('/', express.static(pkg.paths.client));
        // app.use('/', express.static('./'));
        break;
    case 'stage':
        console.log('** STAGE **');
        app.use('/', express.static('./build/stage/'));
        break;
    default:
        console.log('** DEV **');
        app.use('/', express.static('./src/client/'));
        app.use('/', express.static('./'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});
