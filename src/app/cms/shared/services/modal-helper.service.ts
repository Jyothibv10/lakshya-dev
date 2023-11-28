import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class ModalHelperService 
{
    constructor(public dialog: MatDialog)
    {

    }

    openModal(componentName : any , modalWidth : any , data? : any)
    {
        const dialogRef = this.dialog.open(componentName, {
            width: modalWidth,
            data: data
        });

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe((res:any) => {
                if(res != null)
                {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    }
}