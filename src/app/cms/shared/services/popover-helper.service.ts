import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Injectable()
export class PopoverHelperService 
{
    constructor(public dialog: MatDialog)
    {

    }

    openPopover(event : any,componentName : any , data? : any)
    {
        let targetAttr = event.target.getBoundingClientRect();
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = data;
        dialogConfig.position = {
            top: targetAttr.y + targetAttr.height + 10 + "px",
            left: targetAttr.x - targetAttr.width - 75 + "px",
        };

        const dialogRef = this.dialog.open(componentName, dialogConfig);
        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe((res:any) => {
                if(res != null)
                {
                    resolve(res);
                }
            });
        });
    }
}