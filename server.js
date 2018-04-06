var express     = require("express");
var bodyParser  = require("body-parser");
var routes      = require('./controllers')
var middlewares = require('./middlewares')

var app = express();

app.use(middlewares.cors);
app.use(middlewares.parser());

app.get('/medium/:user', routes.getPosts);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("Servidor disponível na porta: ", port);
});


