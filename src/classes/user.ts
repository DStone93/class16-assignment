import fs = require("fs");
import { v4 } from "uuid";


export class User {
    private id: string;
    username: string;
    password: string;

    constructor() {
    }

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
        fs.appendFileSync(path, userData, "utf-8");
        return userToSave;
    }

    load(username:string) {
        const userLoader = new LoggedInUser();
        const loadedUser = userLoader.loginUser(username);
        console.log(loadedUser)
        return loadedUser;
    }
}



class LoggedInUser {
    private static instance: LoggedInUser | null;

    private user: any;

    public loginUser(username:string){
            const path = `${__dirname}/data/${username}`;
            const users = fs.readFileSync(path, "utf-8");
            const usersFile = [JSON.parse(users)]
            const loggedInUser = usersFile.find((u:any) => u.username === username);
            this.user = loggedInUser
            return loggedInUser;
    }

    constructor() {
        if (LoggedInUser.instance) {
            return LoggedInUser.instance;
        } else {
            LoggedInUser.instance = this;
        }
    }
}
