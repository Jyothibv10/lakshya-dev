import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpHelperService 
{
    constructor(private http: HttpClient) 
    {

    }

    /* Get Method */
    getData(url: string) 
    {
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe({
                next: (res: any) => {
                    resolve(res);
                },
                error: (err: any) => {
                    reject(err);
                }
            });
        });
    }

    /* Post Method */
    postData(url: string, reqBody: any) 
    {
        return new Promise((resolve, reject) => {
            this.http.post(url, reqBody).subscribe({
                next: (res: any) => {
                    resolve(res);
                },
                error: (err: any) => {
                    reject(err);
                }
            });
        });
    }
}