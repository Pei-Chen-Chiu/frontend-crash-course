var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var server = http.createServer(app);
var plant = fs.readFileSync('plant.html');
var plantShop = fs.readFileSync('plantShop.html');


app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.get('/', function(request,response){
  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(plant);
  response.end();
});

app.get('/plantShop', function(request,response){
  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(plantShop);
  response.end();
});

server.listen(5000, function() {
  console.log('Server started on port 5000');
});