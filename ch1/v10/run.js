var htmlStatement = require('./statement.js')
var invoices = require('./invoices.json');
var plays = require('./plays.json');

htmlStatement(invoices, plays);