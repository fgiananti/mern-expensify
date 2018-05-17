const fs   = require('fs'),
      express = require('express'),
      app = express(),
      path = require('path');

const indexRoutes = require('./routes/index')

app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback);
});

app.use(express.static(path.join(__dirname, '../client')));

app.use('/', indexRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;
