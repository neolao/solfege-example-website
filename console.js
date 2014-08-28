var solfege = require('solfegejs');

// Initialize the application
var application = new solfege.kernel.Application(__dirname);

// Add the external bundles
var solfegeCli = require('solfegejs-cli');
var solfegeServer = require('solfegejs-server');
var solfegeServerRouter = require('solfegejs-server-router');
var solfegeServerStatic = require('solfegejs-server-static');
var solfegeSwig = require('solfegejs-swig');
application.addBundle('console', new solfegeCli.Console);
application.addBundle('server', new solfegeServer.HttpServer);
application.addBundle('router', new solfegeServerRouter.Router);
application.addBundle('static', new solfegeServerStatic.Static);
application.addBundle('swig', new solfegeSwig.Engine);

// Add the internal bundle
var Website = require('./bundles/website');
application.addBundle('website', new Website);

// Override the configuration
var configuration = require(__dirname + '/config/default.js');
application.overrideConfiguration(configuration);

// Start the application
application.start();
