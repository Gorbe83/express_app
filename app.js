var express = require('express');

var app = express();

app.get('/about',function(req, res) {
  res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/about/:title', function(req, res) {
  res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req, res) {
  res.send('<h1>Bienvenido</h1>');
});

console.log('Server iniciado en localhost:3000...');
app.listen(3000);
