export interface LoginFormInterface {
    username: string;
    password: string;
}

export interface RegisterFromInterface extends LoginFormInterface {
    displayName: string;
}
