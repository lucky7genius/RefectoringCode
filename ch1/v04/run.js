var statement = require('./statement.js')
var invoices = require('./invoices.json');
var plays = require('./plays.json');

statement(invoices, plays);