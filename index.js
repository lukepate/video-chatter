'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port 5000', app.settings.env);
});

// START SERVER
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
