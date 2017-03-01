import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MenuItem } from '../models/menu-item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class MenuItemService {

    constructor(private http: Http) {

    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }

    private handleError(error: any) {
        console.error('error: ', error);
        return Observable.throw(error.statusText);
    }

    postMenuItem(menuItem: MenuItem): Observable<MenuItem> {
        let body = JSON.stringify(menuItem);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});


        return this.http.post('http://localhost:8080/menuitems', body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    readMenuItems(): Observable<MenuItem[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get('http://localhost:8080/menuitems', options)
            .map((response: Response) => <MenuItem[]> response.json())
            .catch(this.handleError)
    }

    readMenuItem(id: string): Observable<MenuItem> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get('http://localhost:8080/menuitems/' + id, options)
            .map(this.extractData)
            .catch(this.handleError)

    }

}
