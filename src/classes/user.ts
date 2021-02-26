import fs = require("fs");
import { v4 } from "uuid";

export class User {
    private id: string;
    username: string;
    password: string;

    //Save the user to be loaded later.
    save() {
        const userToSave = {
            username: this.username,
            password: this.password,
            id: this.id,
        };
        const userData = JSON.stringify(userToSave);
        const path = `${__dirname}/data/${this.username}`;
        if (!fs.existsSync(`${__dirname}/data`)) {
            fs.mkdirSync(`${__dirname}/data`);
        }
        fs.writeFileSync(path, userData, "utf-8");
        return userToSave;
    }
    //Load the user
    loadByUsername(username: string) {
        const userLoader = LoggedInUser.getInstance();
        const loadedUser = userLoader.loginUser(username);
        return loadedUser;
    }
}

export class LoggedInUser {
    private static instance: LoggedInUser | null;
    private user: any;

    private constructor() {}

    public static getInstance() {
        if (!LoggedInUser.instance) {
            LoggedInUser.instance = new LoggedInUser();
        }
        return LoggedInUser.instance;
    }
    public loginUser(username: string) {
        const path = `${__dirname}/data/${username}`;
        const loggedInUser = fs.readFileSync(path, "utf-8");
        this.user = loggedInUser;
        return loggedInUser;
    }

    get loggedInUser() {
        return this.user;
    }
}
