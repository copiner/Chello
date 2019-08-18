var x = require('./log');

console.log("app", x); //app { b: 6 }

//结论：require()返回的是module.exports而不是exports;
