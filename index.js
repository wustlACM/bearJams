var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.use(express.static('./'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/signup', function(req, res){
	console.log("received post req");
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
