import { User, LoggedInUser } from "./classes/user";
import { ArticleBuilder, eArticle } from "./classes/article";

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



const test = new ArticleBuilder();
test.setTitle("hello")
test.setDescription("body")
test.setId();
test.setType(eArticle.Paid)
console.log(test)
