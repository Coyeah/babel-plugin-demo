const babel = require('babel-core');   // babel 核心库，用于实现核心的转换引擎
const types = require('babel-types');  // 实现类型转换，生成 AST 节点

const visitor = {
  ArrowFunctionExpression(path) {
    // 如果这个节点是箭头函数的节点的话，进行替换工作
    let params = path.node.params;
    let blockStatement = types.blockStatement([types.returnStatement(path.node.body)])
    let func = types.functionExpression(null, params, blockStatement, false,false);
    path.replaceWith(func)
  }
}

module.exports = {
  visitor,
}
