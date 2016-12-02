'use strict'

import mongoose from 'mongoose'
import Content from './../model/content'
import Promise from 'bluebird'

import props from'./../../../server.json'

mongoose.Promise = require('bluebird');
mongoose.createConnection(props.db.storage);

var ContentServer = {
    getAll: () => {
        return Content.find();
    }
};

module.exports = ContentServer;
