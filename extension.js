// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

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


	const log_res = vscode.commands.registerCommand('mkalib.logisticRegression', function () {
		vscode.window.showQuickPick(["Logistic Regression"], {placeHolder: "Select Model Type"}).then(function (type) {
		  if (!type) return;
		  vscode.window.showQuickPick(["from scratch", "with sklearn"], {placeHolder: "Select Implementation Type for " + type}).then(function (implementation) {
			if (!implementation) return;
			let fileName = type.toLowerCase().replace(" ", "_") + "_" + implementation.toLowerCase().replace(" ", "_") + ".py";
			let templatePath = path.join(context.extensionPath, 'code_template', fileName);
			fs.readFile(templatePath, function (err, data) {
			  if (err) {
				vscode.window.showErrorMessage("Unable to load template file: " + err);
				return;
			  }
			  let filePath = path.join(vscode.workspace.rootPath, fileName);
			  fs.writeFile(filePath, data, function (err) {
				if (err) {
				  vscode.window.showErrorMessage("Unable to create file: " + err);
				  return;
				}
				vscode.window.showInformationMessage("File " + fileName + " created successfully!");
			  });
			});
		  });
		});
	  });
	
	  context.subscriptions.push(log_res);

	
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
