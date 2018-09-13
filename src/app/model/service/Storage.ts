import { NgModule } from "@angular/core";
import { User } from "../entity/User";
import constants from "../../util/Constants";

export class StorageService {
    constructor (private local?: Storage, private session?: Storage) {}

    public getLocalValue(key: string): any {
        const value = this.local.getItem(constants.APP + "." + key);

        return JSON.parse(value);
    }

    public getSessionValue(key: string): any {
        const value = this.session.getItem(constants.APP + "." + key);

        return JSON.parse(value);
    }

    public setLocalValue(key: string, value: any) {
        if (value) {
            const jsonValue = JSON.stringify(value);

            this.local.setItem(constants.APP + "." + key, jsonValue);
        }
    }

    public setSessionValue(key: string, value: any) {
        if (value) {
            const jsonValue = JSON.stringify(value);

            this.session.setItem(constants.APP + "." + key, jsonValue);
        }
    }

    public removeLocalValue(key: string) {
        this.local.removeItem(constants.APP + "." + key);
    }

    public removeSessionValue(key: string) {
        this.session.removeItem(constants.APP + "." + key);
    }

}