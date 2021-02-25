import fs = require("fs");
import { v4 } from "uuid";


export class User {
    private id: string;
    username: string;
    password: string;

    //Save the user to be loaded later.
    save(){

        const userToSave = {
            username: this.username,
            password: this.password,
            id: this.id
        };
        const userData = JSON.stringify(userToSave)
        const path = `${__dirname}/data/${this.username}`;
        if(!fs.existsSync(`${__dirname}/data`)){
            fs.mkdirSync(`${__dirname}/data`)
        }
        fs.writeFileSync(path, userData, "utf-8");
        return userToSave;
    }
    //Load the user
    loadByUsername(username:string) {
        const userLoader = new LoggedInUser();
        const loadedUser = userLoader.loginUser(username);
        console.log(loadedUser)
        return loadedUser;
    }
}



export class LoggedInUser {

    private static instance: LoggedInUser | null;

    private user: any;
    
    private counter:number = 0
    constructor() {
        this.counter++
        console.log(this.counter)
        if (LoggedInUser.instance) {
            return LoggedInUser.instance;
        } else {
            return LoggedInUser.instance = this;
        }
    }

    public loginUser(username:string){
            const path = `${__dirname}/data/${username}`
            const loggedInUser = fs.readFileSync(path, "utf-8")
            this.user = loggedInUser
            return loggedInUser;
    }

    get loggedInUser(){
        return this.user
    }

}
