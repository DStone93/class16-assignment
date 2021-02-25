import { User, LoggedInUser } from "./classes/user";
import { ArticleBuilder, eArticle } from "./classes/article";

const testLogin = LoggedInUser.getInstance()
const testLogin2 = LoggedInUser.getInstance()
const testUser = new User();
testUser.username= "TestyMcTesterson"
testUser.password= "Test"
testUser.save()
const loadUser = testUser.loadByUsername("TestyMcTesterson")
console.log(testLogin.loggedInUser)
const testUser2 = new User();
testUser2.username = "user"
testUser2.password = "user"

testUser2.save()
testUser2.loadByUsername("user")
console.log(testLogin.loginUser("user"))

const loadUser2 = testUser2.loadByUsername("user")