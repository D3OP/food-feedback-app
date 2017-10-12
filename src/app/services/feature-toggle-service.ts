import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FeatureToggleService {

    constructor(private http: Http) {

    }

    getFeatures() : Observable<Map<string, string>> {
        return this.http.get('../assets/features.json')
            .map((response: Response) => <Map<string, string>> response.json());
   }

}