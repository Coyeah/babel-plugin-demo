const babel = require('babel-core');
const compute = require('./compute');
const arrow = require('./arrow');
let code1 = 'const result = 1 + 2 + 3 + 4 + 5 + 6;';
let code2 = 'let sum = (a,b) => a+b;';
const result = babel.transform(code2, {
  plugins: [
    compute,
    arrow,
  ]
});
console.log(result.code);
