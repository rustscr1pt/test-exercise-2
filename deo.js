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

function handleSelfAssignment(node) {
    if (node.type === 'ExpressionStatement' && node.expression.type === 'AssignmentExpression') {
        if (node.expression.left.name === node.expression.right.name) {
            this.remove(); // Remove self-assignment
        }
    }
}

function handleLogicalExpressions(node) {
    if (node.operator === '&&') {
        node.type = 'ConditionalExpression';
        node.test = node.left;
        node.consequent = node.right;
        node.alternate = { type: 'Literal', value: false };
    } else if (node.operator === '||') {
        node.type = 'ConditionalExpression';
        node.test = node.left;
        node.consequent = { type: 'Literal', value: true };
        node.alternate = node.right;
    }
}

function handleIfStatements(node) {
    if (node.test.type === 'Literal') {
        if (node.test.value) {
            return node.consequent;
        } else {
            return node.alternate || { type: 'EmptyStatement' };
        }
    }
}

walk.traverse(ast, {
    enter: function (node) {
        if (node.type === 'VariableDeclarator' && node.init?.type === 'Literal') {
            constants[node.id.name] = node.init.value;
        }

        if (node.type === 'Identifier' && constants[node.name] !== undefined) {
            return { type: 'Literal', value: constants[node.name] };
        }

        if (node.type === 'BinaryExpression' && node.operator === "+") {
            if (node.left.type === 'Literal' && node.right.type === 'Literal') {
                const combinedString = node.left.value + node.right.value;
                node.type = 'Literal';
                node.value = combinedString;
                delete node.left;
                delete node.right;
                delete node.operator;
            }
        }

        // Combine `setTimeout` handling
        if (node.type === 'CallExpression' &&
            node.callee.name === 'setTimeout' &&
            node.arguments[0].type === 'FunctionExpression' &&
            node.arguments[1].value === 0) {
            return node.arguments[0].body;  // Inline the function
        }

        // Handle Function Expressions with single Return
        if (node.type === 'FunctionExpression' && node.body.body.length === 1) {
            const fnBody = node.body.body[0];
            if (fnBody.type === 'ReturnStatement') {
                return fnBody.argument;
            }
        }

        if (node.type === 'ConditionalExpression') {
            return {
                type: 'IfStatement',
                test: node.test,
                consequent: {
                    type: 'BlockStatement',
                    body: [{ type: 'ExpressionStatement', expression: node.consequent }]
                },
                alternate: {
                    type: 'BlockStatement',
                    body: [{ type: 'ExpressionStatement', expression: node.alternate }]
                }
            };
        }

        // Handle logical expressions
        if (node.type === 'LogicalExpression') {
            handleLogicalExpressions(node);
        }

        // Remove self-assignment
        handleSelfAssignment(node);

        // Handle IfStatement and ConditionalExpression
        if (node.type === 'IfStatement' || node.type === 'ConditionalExpression') {
            return handleIfStatements(node);
        }

        // Handle Member Expressions with arrays
        if (node.type === 'MemberExpression' && node.object.type === 'Identifier' && arrays[node.object.name]) {
            const index = node.property.value;
            return { type: 'Literal', value: arrays[node.object.name][index] };
        }

        if (node.type === 'ForStatement' && node.body.type === 'BlockStatement' && node.body.body.length === 1) {
            return node.body.body[0];  // Unwrap simple loop bodies
        }

        if (node.type === 'VariableDeclarator' && node.init?.type === 'ArrayExpression') {
            arrays[node.id.name] = node.init.elements.map(el => el.value);
        }

        if (node.type === 'MemberExpression' &&
            node.property.type === 'Literal' &&
            node.object.type === 'Identifier') {
            const index = node.property.value;
            if (Array.isArray(arrays[node.object.name])) {
                return { type: 'Literal', value: arrays[node.object.name][index] };  // Replace array access
            }
        }
    },
});

const deobfuscatedCode = escodegen.generate(ast);
// Assuming you already have the AST
const compactCode = escodegen.generate(ast, {
    format: {
        indent: { style: '' },  // Remove indentation
        quotes: 'single',       // Use single quotes for strings
        compact: true,          // Remove unnecessary spaces
    }
});
const links = ['compactdeobfuscated.js', 'deobfuscated.js'];
links
    .forEach((object) => {
        fs.rmSync(`./cleaned/${object}`, {force: true})
    });

fs.writeFileSync('./cleaned/compactdeobfuscated.js', compactCode, 'utf8');
fs.writeFileSync('./cleaned/deobfuscated.js', deobfuscatedCode, 'utf8');

//fs.writeFileSync('output.json', JSON.stringify(ast, null, 2), 'utf-8');
