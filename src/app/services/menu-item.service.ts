import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MenuItem } from '../models/menu-item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Constants } from '../utility/constants';

@Injectable()
export class MenuItemService {
    private baseUrl:string=Constants.BASE_URL;
    constructor(private http: Http) {

    }

    postMenuItem(menuItem: MenuItem): Observable<MenuItem> {
        let body = JSON.stringify(menuItem);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});


        return this.http.post(this.baseUrl, body, options)
            .map((response: Response) => response.json());
    }

    readMenuItems(): Observable<MenuItem[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.baseUrl, options)
            .map((response: Response) => <MenuItem[]> response.json())
    }

    readMenuItem(id: string): Observable<MenuItem> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.baseUrl +"/"+ id, options)
            .map((response: Response) => response.json())

    }

}
