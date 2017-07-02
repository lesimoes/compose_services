var express = require('express');
var request = require('request');
var app = express();

const _port = 3002;


var callOne = function(req, res, next){
    var value = req.query.value;
    //console.log(value)
    request('http://localhost:3000/input?input=' + value, function(error, response, body){
      console.log('Response ' + JSON.stringify(body))
      req.valueXMl = body;

      var valueJSON = req.valueXMl.replace('<value>','');
      valueJSON = valueJSON.replace('</value>','')
      req.newValue = valueJSON.toString();

      next();
    })
}

var callTwo = function(req, res, next){
    var value = req.newValue;
    request('http://localhost:3001/input?input=' + value, function(error, response, body){
      console.log('Response ' + JSON.stringify(body))
      req.valueResp = body;
      next();
    })

}

app.get('/', callOne, callTwo, function(req, res){

    res.end('merda ' + req.valueResp)

})

app.listen(_port)
