// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mkalib" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mkalib.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from mkalib!');
		const message = 'Hello, MKA-UGM';
		vscode.window.showInformationMessage(message);
	});

	context.subscriptions.push(disposable);

	let disposable1 = vscode.commands.registerCommand('mkalib.logisticRegression', function () {
		vscode.window.showInformationMessage('Say logistic regression!');
	  });
	
	  context.subscriptions.push(disposable1);
	
	  // Fitur "Say linear regression!"
	  let disposable2 = vscode.commands.registerCommand('mkalib.linearRegression', function () {
		vscode.window.showInformationMessage('Say linear regression!');
	  });
	
	  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
