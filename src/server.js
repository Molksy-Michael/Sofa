import express from 'express'
import hapi from 'hapi'
import path from 'path'
import compression from 'compression'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import contentServiceRoute from './app/db/content-service/routes'
import routes from './app/routes'

var server = express()

server.use(compression())

server.use(express.static(path.join(__dirname, 'public')))

server.route('/')

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

server.listen(8090);
console.log('listening');
