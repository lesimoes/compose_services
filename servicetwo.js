var express = require('express')
var app = express();
const _port = 3001;

app.get('/input', function(req, res){

  var value = req.query.input;
  value ++;
  console.log(value)
  res.send(value.toString())
})

app.listen(_port)
