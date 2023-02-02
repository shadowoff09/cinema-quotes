'use strict';

var express = require('express');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get("/api/quotes/strangerthings/:num?", function (req, res) {
    res.send(quotesRepository.getRandomSTQuote(req.params.num || 1));
});

app.get("/api/quotes/lucifer/:num?", function (req, res) {
    res.send(quotesRepository.getRandomLuciferQuote(req.params.num || 1));
});

app.get("/api/quotes/bettercallsaul/:num?", function (req, res) {
    res.send(quotesRepository.getRandomBCSQuote(req.params.num || 1));
});

app.get("/api/quotes/breakingbad/:num?", function (req, res) {
    res.send(quotesRepository.getRandomBBQuote(req.params.num || 1));
});

app.get("/api/quotes/deathnote/:num?", function (req, res) {
    res.send(quotesRepository.getRandomDNQuote(req.params.num || 1));
});

app.get("/api/quotes/thelastofus/:num?", function (req, res) {
    res.send(quotesRepository.getRandomTLOUQuote(req.params.num || 1));
});

app.get("/api/quotes/tlou/:num?", function (req, res) {
    res.send(quotesRepository.getRandomTLOUQuote(req.params.num || 1));
});

app.get("/api/quotes/onepiece/:num?", function (req, res) {
    res.send(quotesRepository.getRandomOPQuote(req.params.num || 1));
});


app.listen(port, function () {
    console.log(`Server running on\x1b[33m http://localhost:${port} \x1b[0m`);
})