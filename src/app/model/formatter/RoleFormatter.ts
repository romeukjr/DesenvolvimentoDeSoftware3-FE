import { Role } from "../entity/Role";

export class RoleFormatter {
    public static roleToString(role: Role): string {
        switch (role) {
            case Role.REGULAR:
                return "Regular";
            case Role.ADM:
                return "Administrador";
            default:
                return "None";
        }
    }
}