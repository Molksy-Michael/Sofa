'use strict'

var colors = require('colors');

var contentService = require('./content-service');

module.exports = [
    {
        method: 'GET',
        path: '/getAllContent',
        handler: (request, reply) => {
            contentService.getAll()
                .then(res => {
                    reply(res)
                })
                .catch(err => {
                    console.log(err.red);
                })
        }
    }
];