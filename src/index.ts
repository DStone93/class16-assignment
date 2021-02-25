import { ArticleBuilder, eArticle } from "./classes/article";


const test = new ArticleBuilder();
test.setTitle("hello")
test.setDescription("body")
test.setId();
test.setType(eArticle.Paid)
console.log(test)