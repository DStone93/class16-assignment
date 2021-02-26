import { User } from "../src/classes/user";
import { expect } from "chai";
import "mocha";
import fs = require("fs");

describe("User test", () => {
    it("should create user", () => {
        const user = new User();

        user.username = "TestyMcTesterson";
        user.password = "Test";
        user.save();
        const path = `${__dirname}/../dist/classes/data/${user.username}`;
        console.log(path);
        expect(fs.existsSync(path)).to.be.true;
    });
    it("should delete user", () => {
        const user = new User();
        expect(user).to.equal("Hello world!");
    });
});
