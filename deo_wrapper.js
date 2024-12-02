const walk = require('estraverse');

function my_ast_wrapper(ast) {
    walk.replace(ast, {
        enter: function (node, parent) {
            // Step 1: Look for the reassignment of the function
            if (node.type === 'FunctionDeclaration') {
                let reassignmentFound = false;
                const body = node.body.body;

                // Check if body exists and is an array
                if (!Array.isArray(body)) return node;

                // Find the reassignment statement: a1_0xaf9d = function() {...}
                const reassignIndex = body.findIndex((stmt) =>
                    stmt.type === 'ExpressionStatement' &&
                    stmt.expression.type === 'AssignmentExpression' &&
                    stmt.expression.left.type === 'Identifier' &&
                    stmt.expression.left.name === node.id.name
                );

                if (reassignIndex !== -1) {
                    // Step 2: Remove the reassignment
                    body.splice(reassignIndex, 1);
                    reassignmentFound = true;
                }

                // Step 3: Modify the return statement to return a variable holding the array
                if (reassignmentFound) {
                    const returnStmt = body[body.length - 1];

                    // Replace the return statement with a variable holding the array
                    if (
                        returnStmt && // Check if returnStmt exists
                        returnStmt.type === 'ReturnStatement' &&
                        returnStmt.argument.type === 'CallExpression' &&
                        returnStmt.argument.callee.name === node.id.name
                    ) {
                        // Create a variable holding the array
                        const variableDeclaration = {
                            type: 'VariableDeclaration',
                            declarations: [{
                                type: 'VariableDeclarator',
                                id: {
                                    type: 'Identifier',
                                    name: '_0x44cecb' // Variable name
                                },
                                init: body[0].declarations[0].init // Array assignment
                            }],
                            kind: 'const'
                        };

                        // Modify the return statement to return the variable
                        returnStmt.argument = {
                            type: 'Identifier',
                            name: '_0x44cecb'
                        };
                    }
                }
            }

            if (node.type === 'WhileStatement') {

                // Find the body of the while loop (the statements inside the loop)
                const body = node.body.body;

                // Find the calculation of _0x4bbcbd (variable assignment)
                const calcStatement = body.find((stmt) => stmt.type === 'VariableDeclaration');

                if (!calcStatement) return node; // Avoid errors if no calculation is found

                // Create the new if statement
                const ifStatement = {
                    type: 'IfStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: '===',
                        left: { type: 'Identifier', name: '_0x4bbcbd' },
                        right: { type: 'Identifier', name: '_0x592d2b' }
                    },
                    consequent: {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ReturnStatement',
                            argument: null
                        }]
                    },
                    alternate: {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'CallExpression',
                                callee: {
                                    type: 'MemberExpression',
                                    object: { type: 'Identifier', name: '_0x5c2e75' },
                                    property: { type: 'Identifier', name: 'push' },
                                    computed: false
                                },
                                arguments: [{
                                    type: 'CallExpression',
                                    callee: {
                                        type: 'MemberExpression',
                                        object: { type: 'Identifier', name: '_0x5c2e75' },
                                        property: { type: 'Identifier', name: 'shift' },
                                        computed: false
                                    },
                                    arguments: []
                                }]
                            }
                        }]
                    }
                };

                // Replace the while loop with the new statements
                node.body = {
                    type: 'BlockStatement',
                    body: [calcStatement, ifStatement]
                };
            }

            return node;
        }
    });
    return ast;
}

module.exports = my_ast_wrapper;
