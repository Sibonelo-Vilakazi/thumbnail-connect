export interface AuthState{
    refreshToken: string;
    accessToken: string;
    user: UserState;
}


export interface UserState{
    id: string;
    email: string;
    createDate: Date
}