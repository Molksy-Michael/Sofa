import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import contentService from './app/db/content-service/content-service'
import defaultDataService from './app/db/test-data-service/test-data-service'
import routes from './app/routes'

var server = express(),
    router = express.Router();

server.use(compression())

server.use(express.static(path.join(__dirname, 'public')))



const renderPage = (appHtml, title) => {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>${title}</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

server.get('/', (req, res) => {
  match({routes: routes, location: req.url}, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      const title = 'Забористые тексты'
      res.send(renderPage(appHtml, title))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
});

server.get('/getAllContent', (req, res) => {
  contentService.getAll()
      .then((response) => {
        res.send(response);
      });
});

server.get('/createTestData', (req, res) => {
  defaultDataService();
  res.statusCode = 200;
  res.send('OK');
});

server.listen(8090);
console.log('listening');
