
/* IMPORT */

import * as vscode from 'vscode';

/* ITEM */

class Item extends vscode.TreeItem {

  obj;

  constructor ( obj, label: string, command?: vscode.Command, collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.Expanded ) {

    super ( label, collapsibleState );

    this.obj = obj;
    this.command = command;

  }

}

/* EXPORT */

export default Item;
