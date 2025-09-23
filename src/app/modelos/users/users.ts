export interface UsersMdl {
    id: string;
    username: string;
    password: string;
    role: Roles;
}

export type Roles = "Administrador" | "Gerente" | "Cliente";

export interface UsersData{
    data: UsersMdl[]
}
