import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import UserAPI from './UserAPI';
import PostAPI from './PostAPI';

export default class APIManager {
    public UserApi: UserAPI;
    public PostApi: PostAPI;

    constructor(private http: Http) {
        this.UserApi = new UserAPI(this.http);
        this.PostApi = new PostAPI(this.http);
    }
}