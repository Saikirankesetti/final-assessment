const http = require('http');
http.get({
    hostname: 'localhost',
    port: 20,
    path: '/',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    res.end('okay');
  });