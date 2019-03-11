const babel = require('babel-core');
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

let code = 'let sum = () => {};';
let AST = esprima.parse(code);

// console.log(AST);

estraverse.traverse(AST, {
  enter(node) {
    console.log('enter > ', node.type);
    if (node.type === 'Identifier') {
      node.name += '_enter';
    }
  },
  leave(node) {
    console.log('leave > ', node.type);
    if (node.type === 'Identifier') {
      node.name += '_leave';
    }
  }
})

let result = escodegen.generate(AST);
console.log(result);
