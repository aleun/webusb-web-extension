import * as vscode from 'vscode';
import { Commands } from './commands';

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
    if (vscode.env.uiKind !== vscode.UIKind.Web) {
        vscode.window.showWarningMessage('Running web extension in desktop');
    }

    const commands = new Commands();
    await commands.activate(context);
};
