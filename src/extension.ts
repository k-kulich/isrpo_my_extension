import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Extension myextension activated!');
	
	const disposable = vscode.commands.registerCommand("myfirstextension.googleline", () => {
		const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                const encodedText = encodeURIComponent(selectedText);
                const searchUrl = `https://www.google.com/search?q=${encodedText}`;
                vscode.env.openExternal(vscode.Uri.parse(searchUrl));
            } else {
                vscode.window.showInformationMessage('Пожалуйста, выделите текст для поиска.');
            }
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
