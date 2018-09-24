import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import constants from '../../../util/Constants';
import { Observable } from 'rxjs/Observable';

export default class API<T> {
    protected URL = constants.API.URL;
    
    constructor(private http: Http) {}

    public create(body: string, request?: String): void {
        const requestUrl = this.URL + request;
        this.http.post(requestUrl, body);
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
}