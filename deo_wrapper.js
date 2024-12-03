const walk = require('estraverse');


/**
 * A function for renaming functions in the AST
 * @param ast
 * @param oldName {string} old name of function which needs to be renamed
 * @param newName {string} new name for function
 */
function renameFunction(ast, oldName, newName) {
    walk.replace(ast, {
        enter : function (node) {
            if (
                (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') &&
                node.id &&
                node.id.name === oldName
            )
            {
                console.log(node);
                node.id.name = newName;
            }
            if (node.type === 'Identifier' && node.name === oldName) {
                node.name = newName;
            }
        }
    })
}

/**
 * A function for renaming constants in the AST
 * @param ast
 * @param oldName {string} old name of function which needs to be renamed
 * @param newName {string} new name for function
 */
function renameConst(ast, oldName, newName) {
    walk.replace(ast, {
        enter : function (node) {
            // Rename the const declaration
            if (node.type === 'VariableDeclarator' && node.id.name === oldName) {
                node.id.name = newName;
            }
            // Rename all references to the const
            if (node.type === 'Identifier' && node.name === oldName) {
                node.name = newName;
            }
        }
    })
}

/**
 * A function for removing IIFE from return_biggest_array function (START)
 * @param ast
 * @param oldName {string} old name of function which needs to be renamed
 * @param newName {string} new name for function
 */
function clean_return_biggest_array_from_IIFE(ast) {
    walk.replace(ast, {
        enter : function (node) {
            if (
                node.type === 'ExpressionStatement' &&
                node.expression.type === 'CallExpression' &&
                node.expression.callee.type === 'FunctionExpression'
            ) {
                this.remove()
            }
        }
    })
}



function my_ast_wrapper(ast) {
    walk.replace(ast, {
        enter: function (node) {
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

            renameFunction(ast, 'a1_0xaf9d', 'return_biggest_array');
            clean_return_biggest_array_from_IIFE(ast);

            return node;
        }
    });
    return ast;
}

module.exports = my_ast_wrapper;
