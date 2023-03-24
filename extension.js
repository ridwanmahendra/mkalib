// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	console.log('Congratulations, your extension "mkalib" is now active!');
	let disposable = vscode.commands.registerCommand('mkalib.helloWorld', function () {
		const message = 'Hello, MKA-UGM';
		vscode.window.showInformationMessage(message);
	});

	context.subscriptions.push(disposable);

	let disposable1 = vscode.commands.registerCommand('mkalib.logisticRegression', function () {
		vscode.window.showInformationMessage('Logistic Regression Coming Soon');
	  });
	
	  context.subscriptions.push(disposable1);
	
	  // Fitur "Say linear regression!"
	  let disposable2 = vscode.commands.registerCommand('mkalib.linearRegression', function () {
		vscode.window.showInformationMessage('Linear Regression Coming Soon!');
	  });
	
	  context.subscriptions.push(disposable2);

	// Fitur bikin file baru
	let createFile = vscode.commands.registerCommand('mkalib.createFile', function () {
		vscode.window.showInputBox({ prompt: "Masukkan nama file (termasuk ekstensi)" })
		  .then((fileName) => {
			if (fileName) {
			  let filePath = vscode.workspace.rootPath + "/" + fileName;
			  fs.writeFile(filePath, '', function (err) {
				if (err) {
				  vscode.window.showErrorMessage('Gagal membuat file: ' + err.message);
				} else {
				  vscode.window.showInformationMessage('File berhasil dibuat: ' + fileName);
				}
			  });
			}
		  });
	  });
	  context.subscriptions.push(createFile);

	//   create notebook
	let createNotebook = vscode.commands.registerCommand('mkalib.createNotebook', function () {
		vscode.window.showInputBox({ prompt: "Masukkan nama file" })
		  .then((fileName) => {
			if (fileName) {
			  let filePath = vscode.workspace.rootPath + "/" + fileName + ".ipynb";
			  fs.writeFile(filePath, '', function (err) {
				if (err) {
				  vscode.window.showErrorMessage('Gagal membuat file: ' + err.message);
				} else {
				  vscode.window.showInformationMessage('File berhasil dibuat: ' + fileName + ".ipynb");
				}
			  });
			}
		  });
	  });
	
	  context.subscriptions.push(createNotebook);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
