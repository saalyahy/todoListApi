/*
var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function (req, res) {
   res.send('Hello World\n');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


app.use(express.static(__dirname));

app.get('/', function (req, res) {

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
  //  console.log(result);
    res.send(result);
    db.close();
  });
});
   
  // res.send('Hello World\n');

})


app.get('/time', function (req, res) {

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { name: "Salman" };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
  //  console.log(result);
    res.send(result);
    db.close();
  });
});

  // res.send('Hello World\n');

})


server.listen(8080, function(){
    console.log('Listening at port 8080');
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

});

