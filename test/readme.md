
`一个模块初始状态`

```javascript

(function(exports, require, module, __filename, __dirname) {
  exports = module.exports = {}
  //todo
});

```

`require()返回的是module.exports而不是exports`

exports和module.exports指向同一块内存时, exports 赋值其实是给 module.exports 这个空对象添加属性而已。
