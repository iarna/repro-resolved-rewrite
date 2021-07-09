#!/usr/bin/env node
'use strict'
const restify = require('restify')
const fetch = require('make-fetch-happen')
const npmjs = 'https://registry.npmjs.org'

const server = restify.createServer({
  name: 'resolved-rewrite-repro',
  version: '1.0.0',
})
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

async function proxy (request, response, next) {
  const result = await fetch(`${npmjs}${request.url}`)
  response.statusCode = result.status
  response.headers = result.headers
  result.body.pipe(response)
  return next()
}

server.get('/:package/-/:tarball', proxy)
server.get('/:package', proxy)


server.listen(8080)
console.log('Proxy listening on http://localhost:8080')
