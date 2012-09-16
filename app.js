
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , routes = require('./routes/food.js');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.post('/food',routes.food);
app.put('/food/:id',routes.food);
app.get('/food/:id',routes.food);
app.delete('/food/:id',routes.food);

app.get('/send', function(req,res){
    console.log('hello world');
    res.write('蛋黄派');
//    res.end();
});

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");
