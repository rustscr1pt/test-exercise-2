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

            if (node.type === 'ExpressionStatement') {
                console.log(node);
                if (node.expression.callee) {
                    console.log(node.expression.callee);
                    if (node.expression.callee.type && node.expression.callee.type === 'FunctionExpression') {
                        let simplifiedValue = 12345; // The simplified calculated value
                        console.log('!!!!!!!!');
                        console.log(node.expression.callee.body);
                        // Replace the while loop with a simplified one
                        node.expression.callee.body.body = node.expression.callee.body.body.map(statement => {
                            if (statement.type === 'WhileStatement') {
                                console.log('Found');
                                return {
                                    type: 'WhileStatement',
                                    test: {
                                        type: 'BinaryExpression',
                                        operator: '===',
                                        left: { type: 'Identifier', name: '_0x4bbcbd' },
                                        right: {
                                            type: 'Identifier',
                                            name: '_0x592d2b'
                                        }},
                                        body: {
                                        type: 'BlockStatement',
                                            body: [{
                                                type: 'ExpressionStatement',
                                                expression: {
                                                    type: 'AssignmentExpression',
                                                    operator: '=',
                                                    left: { type: 'Identifier', name: '_0x4bbcbd' },
                                                    right: { type: 'Literal', value: simplifiedValue }
                                                }
                                            }, {
                                                type: 'ReturnStatement',
                                                argument: null
                                            }]
                                        }
                                    };
                                }
                                return statement;
                            });
                    }
                }
            }

            // if (node.type === 'FunctionDeclaration' && node.body.body.length > 0) {
            //     let simplifiedValue = 12345; // The simplified calculated value
            //     // Replace the while loop with a simplified one
            //     node.body.body = node.body.body.map(statement => {
            //         if (statement.type === 'WhileStatement') {
            //             console.log('Found');
            //             return {
            //                 type: 'WhileStatement',
            //                 test: {
            //                     type: 'BinaryExpression',
            //                     operator: '===',
            //                     left: { type: 'Identifier', name: '_0x4bbcbd' },
            //                     right: {
            //                         type: 'Identifier',
            //                         name: '_0x592d2b'
            //                     }
            //                 },
            //                 body: {
            //                     type: 'BlockStatement',
            //                     body: [{
            //                         type: 'ExpressionStatement',
            //                         expression: {
            //                             type: 'AssignmentExpression',
            //                             operator: '=',
            //                             left: { type: 'Identifier', name: '_0x4bbcbd' },
            //                             right: { type: 'Literal', value: simplifiedValue }
            //                         }
            //                     }, {
            //                         type: 'ReturnStatement',
            //                         argument: null
            //                     }]
            //                 }
            //             };
            //         }
            //         return statement;
            //     });
            // }
            return node;
        }
    });
    return ast;
}

module.exports = my_ast_wrapper;
