


console.log(exports);

console.log(module.exports);

//验证初始状态 exports = module.exports = {}

console.log("*****11********************")


exports.b = 8;
module.exports.a = 2;

console.log(exports)

console.log(module.exports);

//exports和module.exports指向同一块内存时, exports 赋值其实是给 module.exports 这个空对象添加属性而已。

console.log("*****22*********************")


module.exports = {b:6};//指向的初始内存发生转移，module.exports与exports不再指向同一块地址

console.log(exports);//{ b: 8, a: 2 }

console.log(module.exports);//{ b: 6 }

console.log("*****33*********************")

/*
app.js
var x = require('./log');

console.log(x); //app { b: 6 }

*/
