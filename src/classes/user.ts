import fs = require('fs')
import { v4 } from 'uuid'

interface IUser {
    id:string,
    name:string,
    password:string,

}
const path = `${__dirname}/data`


export class User{
    
    private static instance:User|null

    private _client:any

    public createUser(user:IUser):Promise<any>{
        return new Promise((resolve, reject) => {
            const userData = JSON.stringify(user)
            fs.writeFileSync(path, userData, "utf-8")
            return user;
        })
    }

    public loginUser():Promise<any>{
        return new Promise((resolve, reject) => {
            const users = fs.readFileSync(path, "utf-8")
        })
    }

    public logoutUser():Promise<any>{
        return new Promise((resolve, reject) => {
            
        })
    }
}