import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  if (vscode.env.uiKind === vscode.UIKind.Web) {
    vscode.window.showInformationMessage("Extension is running in the web");
  } else {
    vscode.window.showInformationMessage("Extension is running on the desktop");
  }
}