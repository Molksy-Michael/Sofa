'use strict'

import mongoose from 'mongoose'
import Content from './../model/content'
import Promise from 'bluebird'

import properties from'./../../../server.json'
import testContent from './testContent'

mongoose.Promise = require('bluebird');
mongoose.connect(properties.db.storage);

var createDefaultData = () => {
    testContent.forEach(content => {
        let curr = new Content(content);
        curr.save()
    })
};

export default createDefaultData;