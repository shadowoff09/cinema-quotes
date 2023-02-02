"use strict";

var quotesOP = require("./quotes/quotesOP");
var quotesTLOU = require("./quotes/quotesTLOU");
var quotesDeathNote = require("./quotes/quotesDN");
var quotesBreakingBad = require("./quotes/quotesBB");
var quotesBetterCallSaul = require("./quotes/quotesBCS");
var quotesLucifer = require("./quotes/quotesLucifer");
var quotesStrangerThings = require("./quotes/quotesST");

module.exports = {
    getRandomBCSQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesBetterCallSaul.length
                ? quotesBetterCallSaul.length
                : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote =
                    quotesBetterCallSaul[
                    Math.floor(Math.random() * quotesBetterCallSaul.length)
                    ];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomLuciferQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesLucifer.length
                ? quotesLucifer.length
                : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote = quotesLucifer[Math.floor(Math.random() * quotesLucifer.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomSTQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesStrangerThings.length
                ? quotesStrangerThings.length
                : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote =
                    quotesStrangerThings[
                    Math.floor(Math.random() * quotesStrangerThings.length)
                    ];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomBBQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesBreakingBad.length
                ? quotesBreakingBad.length
                : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote =
                    quotesBreakingBad[
                    Math.floor(Math.random() * quotesBreakingBad.length)
                    ];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomDNQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesDeathNote.length
                ? quotesDeathNote.length
                : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote =
                    quotesDeathNote[Math.floor(Math.random() * quotesDeathNote.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomTLOUQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesTLOU.length ? quotesTLOU.length : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote = quotesTLOU[Math.floor(Math.random() * quotesTLOU.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },

    getRandomOPQuote: function getRandom(numberOfQuotes) {
        var limit =
            numberOfQuotes > quotesOP.length ? quotesOP.length : numberOfQuotes;

        var out = new Array(limit);
        var quote;

        for (var i = 0; i < limit; i++) {
            do {
                quote = quotesOP[Math.floor(Math.random() * quotesOP.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    },
};
