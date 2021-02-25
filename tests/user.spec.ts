import { User ,LoggedInUser} from "../src/classes/user";
import fs = require("fs");
import { expect, use } from "chai";
import "mocha";


let path = __dirname        
// console.log( "*************************",path)

describe("User test", () => {
    it("should create user", () => {

        const user = new User();
        user.username= "TestyMcTesterson"
        user.password= "Test"

        expect(user).to.instanceOf(User);
    });
    it("should save user", () => {

        const user = new User();
        user.username= "Testy"
        user.password= "Test"
        user.save()

        //dirname gives me wrong path by directing to tests file
        //need to replace and correct the path to json file 
        path = path.replace("tests","src/classes/data")
        
        const fileExist = fs.existsSync(`${path}/Testy`)

        expect(fileExist).to.be.true;
    });
    it("should load user by name", () => {

        const user = new User();
        user.username= "TestyMcTesterson"
        user.password= "Test"
        user.save();

        const loadUser = user.loadByUsername("TestyMcTesterson")

        expect(loadUser).to.equal('{"username":"TestyMcTesterson","password":"Test"}');
    });
    describe("should login user", () => {

        it("should login user by name,loginUser()", () => {


            // path = path.replace("tests","dist/classes/data/TestyMcTesterson")
            
            const user = new User();
            user.username= "TestyMcTesterson"
            user.password= "Test"
            user.save()
    
            const testLogin = LoggedInUser.getInstance()
            const loggedInUser = testLogin.loginUser("TestyMcTesterson")
            // console.log("++++++++",loggedInUser)
            console.log("++++++++",testLogin.loggedInUser)
            expect(loggedInUser).to.equal('{"username":"TestyMcTesterson","password":"Test"}');
        });

        it("should get login user, loggedInUser", () => {


            // path = path.replace("tests","dist/classes/data/TestyMcTesterson")
            
            const user = new User();
            user.username= "TestyMcTesterson"
            user.password= "Test"
            user.save()
    
            const testLogin = LoggedInUser.getInstance()
            testLogin.loginUser("TestyMcTesterson")
           
            expect(testLogin.loggedInUser).to.equal('{"username":"TestyMcTesterson","password":"Test"}');
        });
    })
});
