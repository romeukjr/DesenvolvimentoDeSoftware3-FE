import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import constants from '../../../util/Constants';
import { User } from '../../entity/User';
import API from './API';

export default class UserAPI {
    private REQUEST_URL = constants.API.USER;
    private api: API<User>;
    public users: User[];

    constructor(private http: Http) {
        this.assemble();
    }

    private assemble(): void {
        this.api = new API<User>(this.http);
        this.getUsers();
    }

    public findUser(email: String, password: String): User {
        let id: string = "";

        let user = this.users.find((u) => u.email == email && u.password == password);

        return user;
    }

    public async getUsers() {
        let observer = await this.api.getDataCollection(this.REQUEST_URL);

        await observer.subscribe((data: User[]) => {
            this.users =  data;
        });
    }

    public async getUser(id: string): Promise<User> {
        let user: User;

        let observer = await this.api.getData(this.REQUEST_URL + "/" + id);
        await observer.subscribe((data: User) => {
            user = data
        });

        return user;
    }
}