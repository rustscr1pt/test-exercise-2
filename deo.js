const esprima = require('esprima');
const fs = require('fs');
const walk = require('estraverse');
const escodegen = require('escodegen');

const obfuscated = fs.readFileSync('original.js', "utf-8");
const ast = esprima.parseScript(obfuscated);

walk.traverse(ast, {
    enter: function (node) {
        if (node.type === "VariableDeclarator") {
            // Если нода имеет идентификатор переменной => то добавить приставку для более простой читаемости
            node.id.name = 'var_' + node.id.name;
        }
        if (node.type === "BinaryExpression" && node.operator === "+") {

        }
    }
})

const deobfuscatedCode = escodegen.generate(ast);
// Write the deobfuscated code to a file
fs.writeFileSync('deobfuscated.js', deobfuscatedCode, 'utf8');

//fs.writeFileSync('output.json', JSON.stringify(ast, null, 2), 'utf-8');
