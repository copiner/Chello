
### CommonJs


在 Node.js 模块系统中，每个文件都被视为独立的模块

在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装：

```
(function(exports, require, module, __filename, __dirname) {
// 模块的代码实际上在这里
});
```

每一个node.js执行文件，都自动创建一个module对象，同时，module对象会创建一个叫exports的属性，初始化的值是 {}
为了方便，模块中会有一个exports对象和module.exports指向同一块内存。所以初始状态下：

```
module.exports = exports = {};

```

exports和module.exports指向同一块内存，`但require()返回的是module.exports而不是exports`。

```
var str = "difference"
exports.a = str;
exports.b = function () {

}
```
给 exports 赋值其实是给 module.exports 这个空对象添加了两个属性而已，因为此时exports和module.exports指向同一块内存，上面的代码相当于：
```
var str = "difference"
module.exports.a = str;
module.exports.b = function () {

}
```

### 使用exports

app.js
```
var s = require("./log");
s.log("hello");
```

log.js
```
exports.log = function (str) {
    console.log(str);
}
```
```
require("./log")返回的是module.exports，此时由log.js有
module.exports.log = function (str) {
    console.log(str);
}
```

### 使用module.exports

app.js
```
var s = require("./log");
s.log("hello");
```

log.js
```
module.exports.log = function (str) {
    console.log(str);
}
```

### 再看下面的例子

app.js
```
var x = require('./log');

console.log(x.a); //2
```

log.js
```
module.exports = {a: 2}
exports.a = 1
```
module.exports通过赋值方式指向的内存发生变化，已经和exports对象指向的内存不同了，exports对象的修改不会影响到module.exports对象了。

### module.exports

The module.exports object is created by the Module system. Sometimes this is not acceptable; many want their module to be an instance of some class. To do this, assign the desired export object to module.exports. Assigning the desired object to exports will simply rebind the local exports variable, which is probably not what is desired.

For example, suppose we were making a module called a.js:

```javascript
const EventEmitter = require('events');

module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
  module.exports.emit('ready');
}, 1000);

```
Then in another file we could do:
```javascript
const a = require('./a');
a.on('ready', () => {
  console.log('module "a" is ready');
});
```
Assignment to `module.exports` must be done immediately. It cannot be done in any callbacks. This does not work:

x.js
```javascript
setTimeout(() => {
  module.exports = { a: 'hello' };
}, 0);
```
y.js
```javascript
const x = require('./x');
console.log(x.a);
```


### exports

exports 变量是在模块的文件级作用域内可用的，且在模块执行之前赋值给 module.exports。

它允许使用快捷方式，因此 module.exports.f = ... 可以更简洁地写成 exports.f = ...。 但
是，就像任何变量一样，如果为 exports 赋予了新值，则它将不再绑定到 module.exports：

```javascript
module.exports.hello = true; // 从模块的引用中导出。
exports = { hello: false };  // 不导出，仅在模块中可用。
```

当 module.exports 属性被新对象完全替换时，通常也会重新赋值 exports：
```javascript
module.exports = exports = function Constructor() {
  // ...
};
```

为了说明这种行为，想象对 require() 的假设实现，它与 require() 的实际实现非常类似：

```javascript
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // 模块代码在这。在这个例子中，定义了一个函数。
    function someFunc() {}
    exports = someFunc;
    // 此时，exports 不再是一个 module.exports 的快捷方式，
    // 且这个模块依然导出一个空的默认对象。
    module.exports = someFunc;
    // 此时，该模块导出 someFunc，而不是默认对象。
  })(module, module.exports);
  return module.exports;
}
```



 -  [test](https://github.com/copiner/chello/test)

 - [workshop](https://github.com/copiner/chello) - A workshop to learn the basics of node.
