import { Role } from "./Role";

export class User {
    private _id: any;
    name: string;
    email: string;
    role: Role;
    password: string;
    image: any;

    constructor(email: string, password: string, name?: string, role?: Role, image?: any) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }

    public getId(): any {
        return this._id;
    }

    public doesExist(): boolean {
        //TODO: Consultar banco real
        return true;
    }
}