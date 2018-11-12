import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import constants from '../../../util/Constants';
import { Observable } from 'rxjs/Observable';
import { IJsonGenerator } from '../../entity/ijson-generator';

export default class API<T extends IJsonGenerator> {
    protected URL = constants.API.URL;
    
    constructor(private http: Http) {}

    public create(object: T, request?: String): void {
        const requestUrl = this.URL + request;
        const body = object.json();
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers : headers});
        options.body = body;
        this.http.post(requestUrl, body, options).subscribe((res: Response) => {});
    }

    public async update(object: T, request?: String): Promise<Observable<void>> {
        const requestUrl = this.URL + request;
        const body = object;
        let result;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers : headers});
        options.body = body;
        return await this.http.put(requestUrl, body, options)
                              .map((res: Response) => { 
                                    result = res.text 
                                });

        
    }

    public async getData(request?: String): Promise<Observable<T>> {
        const requestUrl = this.URL + request;
        return await this.http.get(requestUrl)
            .map((res: Response) => <T>res.json());
    }

    public async getDataCollection(request?: String): Promise<Observable<T[]>> {
        const requestUrl = this.URL + request;
        return await this.http.get(requestUrl)
            .map((res: Response) => <T[]>res.json());
    }

    public delete(request?: String) {
        const requestUrl = this.URL + request;
        this.http.delete(requestUrl).subscribe((res: Response) => {});
    }
}