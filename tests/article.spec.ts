import { ArticleBuilder, ArticleDirector, eArticle } from "../src/classes/article";
import { expect } from "chai";
import "mocha";
import fs = require("fs");

// const result = new ArticleBuilder();
let path = __dirname  

describe("Article test", () => {

    describe("ArticleBuilder", () => {

        it("should have ArticleBuilder, return Article", () => {
            const articlebuilder = new ArticleBuilder(); 
            expect(articlebuilder).exist;
        });
        it("should add title, setTitle", () => {
            const article = new ArticleBuilder();
            article.setTitle("Godzilla")

            const publishArticle = article.getArticle();
            expect(publishArticle.title).to.equal("Godzilla");
        });

        it("should add id, setId", () => {
            const article = new ArticleBuilder();
            article.setId();

            const publishArticle = article.getArticle();
            
            expect(publishArticle.id).to.be.a('string');
            expect(publishArticle.id).length.does.not.equal(0);
            
        });

        it("should add Description, setDescription", () => {
            const article = new ArticleBuilder();
            article.setDescription("Description");

            const publishArticle = article.getArticle();
            expect(publishArticle.description).to.equal("Description");
        });

        it("should add Body,setBody", () => {
            const article = new ArticleBuilder();
            article.setBody("Body");

            const publishArticle = article.getArticle();
            expect(publishArticle.body).to.equal("Body");
        });

        it("should delete article ,delete", () => {
            const article = new ArticleBuilder();
            article.setTitle("testDelete");
            article.setId();
            article.publishArticle();

            path = path.replace("tests","src/classes/articles")  


            article.delete();

            const fileExist = fs.existsSync(`${path}/testDelete`)

            expect(fileExist).to.be.false;

        });

        describe("setType,", () => {

            it("should Type ==> Guest", () => {
                const article = new ArticleBuilder();
                article.setType(eArticle.Guest);
    
                const publishArticle = article.getArticle();
                expect(publishArticle.type).to.equal("Guest");
            });

            it("should Type ==> Premium", () => {
                const article = new ArticleBuilder();
                article.setType(eArticle.Premium);
    
                const publishArticle = article.getArticle();
                expect(publishArticle.type).to.equal("Premium");
            });

            it("should Type ==> Paid", () => {
                const article = new ArticleBuilder();
                article.setType(eArticle.Paid);
    
                const publishArticle = article.getArticle();
                expect(publishArticle.type).to.equal("Paid");
            });

        })
        describe("publish Article,", () => {
            it("Should published an Article", () => {

                     

                const article = new ArticleBuilder();
               
                article.setTitle("Godzilla")
                article.setId()
                article.setType(eArticle.Guest)
                article.setDescription("desc")
                article.setBody("body")
                article.publishArticle();

                path = path.replace("tests","src/classes/articles")               
                const fileExist = fs.existsSync(`${path}/Godzilla`)
                        
                expect(fileExist).to.be.true;
            });
        })
        describe("ArticleDirector,", () => {
            it("Should have instance of an Article", () => {

                const articleDirector = new ArticleDirector();

                expect(articleDirector).exist;

                // console.log(articleDirector)
               
            

            });
        })
        


    });
});
