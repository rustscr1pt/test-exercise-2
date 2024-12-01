const esprima = require('esprima');
const fs = require('fs');
const walk = require('estraverse');
const escodegen = require('escodegen');

const obfuscated = fs.readFileSync('original.js', "utf-8");
const ast = esprima.parseScript(obfuscated);

const constants = {};
const arrays = {};

function decodeBase64(str) {
    return Buffer.from(str, 'base64').toString('utf-8');
}

walk.traverse(ast, {
    enter: function (node) {
        if (node.type === 'VariableDeclarator' && node.init && node.init.type === 'Literal') {
            const varName = node.id.name;
            const varValue = node.init.value;

            walk.replace(ast, {
                enter: function (innerNode) {
                    if (innerNode.type === 'Identifier' && innerNode.name === varName) {
                        return {
                            type: 'Literal',
                            value: varValue
                        };
                    }
                }
            });
        }
        if (node.type === "BinaryExpression" && node.operator === "+") {
            if (node.left.type === 'Literal' && node.right.type === 'Literal') {
                const combinedString = node.left.value + node.right.value;
                node.type = 'Literal';
                node.value = combinedString;
                delete node.left;
                delete node.right;
                delete node.operator;
            }
        }

        if (node.type === 'IfStatement' && node.test.type === 'Literal' && !node.test.value) {
            this.remove(); // Remove unreachable code
        }

        if (node.type === 'VariableDeclarator' && node.init?.type === 'Literal') {
            constants[node.id.name] = node.init.value;
        }

        if (node.type === 'Identifier' && constants[node.name] !== undefined) {
            return {
                type: 'Literal',
                value: constants[node.name],
            };
        }

        if (node.type === 'ConditionalExpression' || node.type === 'IfStatement') {
            if (node.test.type === 'Literal') {
                if (node.test.value) {
                    return node.consequent;
                } else {
                    return node.alternate || { type: 'EmptyStatement' };
                }
            }
        }

        if (node.type === 'VariableDeclarator' && node.init?.type === 'ArrayExpression') {
            arrays[node.id.name] = node.init.elements.map(el => el.value);
        }

        if (node.type === 'MemberExpression' && node.object.type === 'Identifier' && arrays[node.object.name]) {
            const index = node.property.value;
            return { type: 'Literal', value: arrays[node.object.name][index] };
        }
    },
});

const deobfuscatedCode = escodegen.generate(ast);
fs.writeFileSync('deobfuscated.js', deobfuscatedCode, 'utf8');

//fs.writeFileSync('output.json', JSON.stringify(ast, null, 2), 'utf-8');
