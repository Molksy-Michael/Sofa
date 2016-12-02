'use strict'

var props = require('./../../../server.json');

var mongoose = require('mongoose');
var Content = require('./../model/content');
var Promise = require('bluebird');

mongoose.Promise = require('bluebird');
mongoose.createConnection(props.db.storage);

var ContentServer = {
    getAll: () => {
        return Content.find();
    }
};

module.exports = ContentServer;
