import { User, LoggedInUser } from "./classes/user";
import { ArticleBuilder, eArticle } from "./classes/article";

const testLogin = LoggedInUser.getInstance();
const testLogin2 = LoggedInUser.getInstance();
const testUser = new User();
testUser.username = "TestyMcTesterson";
testUser.password = "Test";
testUser.save();
const loadUser = testUser.loadByUsername("TestyMcTesterson");
console.log(testLogin.loggedInUser);
const testUser2 = new User();
testUser2.username = "user";
testUser2.password = "user";

testUser2.save();
testUser2.loadByUsername("user");
console.log(testLogin.loginUser("user"));

const loadUser2 = testUser2.loadByUsername("user");

console.log(/**** */);
const art1 = new ArticleBuilder();
art1.setTitle("Godzilla");
art1.setId();
art1.setType(eArticle.Guest);
art1.setDescription("desc");
art1.setBody("body");
art1.publishArticle();
art1.delete();

// const art2 = new ArticleBuilder();
// art1.setTitle("Godzillaaa");
// art1.setId();
// art1.setType(eArticle.Guest);
// art1.setDescription("desc1");
// art1.setBody("body1");
// art1.publishArticle();

console.log(art1);
// console.log(art2);
