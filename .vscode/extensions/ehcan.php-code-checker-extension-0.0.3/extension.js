// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const request = require('request');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.php-code-checker', function () {
		var STRING = "";
		vscode.window.activeTextEditor._documentData._lines.forEach(el => {
			STRING += (el + "\n");
		});
		var options = {
			'method': 'POST',
			'url': 'http://phpcodechecker.com/api/',
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			form: {
				'code': STRING
			}
		};
		request(options, function (error, response) {
			if (error) {
				vscode.window.showInformationMessage('Error!');
			}
			let res = JSON.parse(response.body);
			if (res.errors == "TRUE") {
				vscode.window.showErrorMessage(res.syntax.code);
				vscode.window.showErrorMessage(res.syntax.message);
			} else {
				vscode.window.showInformationMessage('No Error!');
			}
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
