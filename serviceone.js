var express = require('express');
var xml = require('xml');

var app = express();
const _port = 3000;

app.get('/input', function(req, res){
  var input = req.query.input;
  console.log(input)
  var json = {
    value : input
  }
  var xmlString = xml(json)
  res.send(xmlString)
})

app.listen(_port)
