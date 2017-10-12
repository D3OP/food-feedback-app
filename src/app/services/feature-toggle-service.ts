import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FeatureToggleService {

    constructor(private http: Http) {

    }

    getFeatures() : Observable<any> {
        return this.http.request('src/app/menu-item-list/features.json')
            .map(response => {
                response.json().features;
            });
    }

}