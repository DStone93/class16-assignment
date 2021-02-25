import { User, LoggedInUser } from "./classes/user";

const testLogin = new LoggedInUser()
const testUser = new User();
testUser.username= "TestyMcTesterson"
testUser.password= "Test"
testUser.save()
const loadUser = testUser.loadByUsername("TestyMcTesterson")
const testUser2 = new User();
testUser2.username = "user"
testUser2.password = "user"

testUser2.save()

const loadUser2 = testUser2.loadByUsername("user")
console.log(loadUser)
console.log(loadUser2)