const babel = require('babel-core');
const types = require('babel-types');

const visitor = {
  BinaryExpression(path) {
    const node = path.node;
    let result;
    // 判断表调是两遍是否都是数字
    if (types.isNumericLiteral(node.left) && types.isNumericLiteral(node.right)) {
      switch (node.operator) {
        case "+":
          result = node.left.value + node.right.value;
          break;
        case "-":
          result = node.left.value - ndoe.right.value;
          break;
        case "*":
          result = node.left.value * ndoe.right.value;
          break;
        case "/":
          result = node.left.value / ndoe.right.value;
          break;
        case "**":
          let i = node.right.value;
          while(--i) {
            result = result || node.left.value;
            result = result * node.left.value;
          }
          break;
        default:
      }
    }
    // 如果上面的运算有结果的话
    if (result !== undefined) {
      // 把表达式节点替换成number字面量
      path.replaceWith(types.numericLiteral(result));
    }
    // 向上递归的方式遍历父级节点，判断父级节点是否是运算
    if (path.parentPath.node.type == 'BinaryExpression') {
      visitor.BinaryExpression.call(null, path.parentPath);
    }
  }
}

module.exports = {
  visitor,
}
