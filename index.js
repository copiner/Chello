(function(exports, require, module, __filename, __dirname) {
  exports = module.exports
// 模块的代码实际上在这里
  module.exports = {
      a: require('./lib/a'),
      b: require('./lib/b')
  }
  
});
