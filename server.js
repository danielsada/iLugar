/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
    io.on('ardu', function(message){
        console.log("status: "+message);
    });
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});
*/

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/indexBoot.html');
});
app.put('/ttyACM/:bin', function(req, res){
  /*io.emit('arduino-recieve', {compuertas:$("#c").val(),
                 piso:$("#p").val(),
                 area:$("#a").val(),
                 total:$("#t").val(),})*/
    io.emit('arduino-recieve', {compuertas:req.params.bin,
                                total:7});
                 console.log(req.params);
    res.send("<h1>hey</h1>")
});
app.get('/send', function(req, res){
  res.sendFile(__dirname + '/sendStatus.html');
});
app.get('/sendterm', function(req,res){
  console.log(req);
  /*var sender = {compuertas:req}
  io.emit('arduino-recieve', )*/
});
io.on('connection', function(socket){
    console.log("got connection");
  socket.on('arduino-signal', function(msg){
      console.log("got signal" + msg)
    io.emit('arduino-recieve', msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
