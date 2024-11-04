export type User ={
    id:number
    name: string;
    last_name:string;
    email:string;
    password:string;
    avatar?:string
}
export type UserLogin = Omit<User, 'rol_id'| 'last_name' | 'name' | 'id'| 'avatar'>;
export type UserLoggedStorage = UserLogged & { accessToken: string,refreshToken:string };
export type UserLogged = Omit<User, 'password'>;


export type UserContextType = {
    storeUser: (dataUser:UserLoggedStorage)=>void;
    removeUser:()=>void;
    user:UserLogged

}