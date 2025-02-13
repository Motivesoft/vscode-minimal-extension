import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  if (vscode.env.uiKind === vscode.UIKind.Web) {
    console.log("Extension is running in the web");

    vscode.window.showInformationMessage("Extension is running in the web");
  } else {
    console.log("Extension is running on the desktop");
    
    vscode.window.showInformationMessage("Extension is running on the desktop");
  }
}