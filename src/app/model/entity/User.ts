import { Role } from "./Role";
import { IJsonGenerator } from "./ijson-generator";
import { RoleFormatter } from "../formatter/RoleFormatter";

export class User implements IJsonGenerator{
    _id: any;
    name: string;
    email: string;
    role: Role;
    roleDescription: string;
    password: string;
    image: any;

    constructor(email: string, password: string, name?: string, role?: Role, image?: any) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
        this.image = image;
        this.roleDescription = RoleFormatter.roleToString(role);
    }

    public setRole(role: Role) {
        this.role = role;
        this.roleDescription = RoleFormatter.roleToString(role);
    }
    
    public json(): any {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        };
    }

    public doesExist(): boolean {
        //TODO: Consultar banco real
        return true;
    }
}