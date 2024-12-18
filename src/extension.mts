// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import open from 'open';

//const { default: open } = await import('open');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension myextension activated!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	/*
	const disposable = vscode.commands.registerCommand('myfirstextension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from MyFirstExtension!');
	});
	*/
	
	const disposable = vscode.commands.registerCommand("myfirstextension.googleline", () => {
		const editor = vscode.window.activeTextEditor;
		if (typeof editor !== 'undefined') {
			const selection = editor.selection;
			const selectedText = editor.document.getText(selection);
			if (selectedText) {
				
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
                open(searchUrl).then(() => {
                    console.log(`Поиск по запросу: ${selectedText}`);
                }).catch((error) => {
                    console.error('Ошибка при открытии браузера:', error);
                });
            }
		} else {
			console.error("No active editor.");
			vscode.window.showErrorMessage("No Active Additor.")
		}	

	})

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
