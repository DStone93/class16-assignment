import { ArticleBuilder } from "../src/classes/article";
import { expect } from "chai";
import "mocha";
// const result = new ArticleBuilder();
describe("Article test", () => {
    it("should create Article", () => {
        const result = new ArticleBuilder(); 
        expect(result).to.equal("Hello world!");
    });
    it("should delete user", () => {
        const result = new ArticleBuilder();
        expect(result).to.equal("Hello world!");
    });
});
