var solfege = require('solfegejs');

/**
 * Simple website
 */
var Website = solfege.util.Class.create(function()
{
    // Initialize properties
    this.controllers = require('./controllers');

}, 'solfege.example.website.Website');
var proto = Website.prototype;

/**
 * The controller package
 *
 * @member  {Object} solfege.example.website.Website.prototype.controllers
 */
proto.controllers;



module.exports = Website;
