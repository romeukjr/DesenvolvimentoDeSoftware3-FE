import { User } from "./User";
import { StorageService } from "../service/Storage";
import constants from "../../util/Constants";
import APIManager from "../service/api/APIManager";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Session {

    private user: User;
    private storage: StorageService;
    private isUserAuthenticated: boolean;
    public apiManager: APIManager;

	constructor(private http: Http) {
		this.assemble();
    }

    private assemble(): void {
        this.initiateStorage();
        this.initiateUser();
        this.initializeApiManager();
    }

    private authenticate(email: string, password: string) {
        const user = this.apiManager.UserApi.findUser(email, password);
        this.setUser(user);
        this.isUserAuthenticated = !!user;
    }

    private initiateStorage(): void {
        this.storage = new StorageService(localStorage, sessionStorage);
    }

    private initiateUser(): void {
        const user = this.storage.getSessionValue(constants.LOGIN.LOGGED_USER);

        if (user && (user instanceof User)) {
            this.user = user;
        }

        this.user = null;
    }

    private initializeApiManager() {
        this.apiManager = new APIManager(this.http);
    }

    private setUser(user: User) {
        this.user = user;
    }

    public getUser(): User {
        if (this.user) {
            return this.user;
        } else if (this.isUserLogged()) {
            this.user = this.storage.getSessionValue(constants.LOGIN.LOGGED_USER);
            return this.user;
        }

        return null;
    }

    public get userName(): string {
      const user = this.getUser();
      return user.name;
    }

    public isUserLogged(): boolean {
        return !!(this.storage.getSessionValue(constants.LOGIN.LOGGED_USER)) && this.isUserAuthenticated;
    }

    public logOut() {
        this.storage.removeSessionValue(constants.LOGIN.LOGGED_USER);
    }

    public logIn(email: string, password: string) {
        this.authenticate(email, password);
        this.storage.setSessionValue(constants.LOGIN.LOGGED_USER, this.user);
        this.isUserLogged();
    }
}
