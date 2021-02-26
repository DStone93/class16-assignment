import fs from "fs";
import { v4 } from "uuid";

export enum eArticle {
    Guest = "Free",
    Premium = "Premium",
    Paid = "Paid",
}

class Article {
    id: string;
    title: string;
    description: string;
    body: string;
    type: string;
}

export class ArticleBuilder {
    baseArticle = Article;

    private _instance: Article;

    protected get instance(): Article {
        if (!this._instance) {
            this._instance = new this.baseArticle();
        }

        return this._instance;
    }

    setId() {
        this.instance.id = v4();
    }

    setTitle(title: string) {
        this.instance.title = title;
    }

    setDescription(desc: string) {
        this.instance.description = desc;
    }

    setBody(body: string) {
        this.instance.body = body;
    }

    setType(type: string) {
        this.instance.type = type;
        switch (type) {
            case eArticle.Guest:
                this.baseArticle;
                break;
            case eArticle.Premium:
                this.baseArticle;
                break;
            case eArticle.Paid:
                this.baseArticle;
                break;
            default:
                throw new Error("Your Article Needs To Have a Type");
        }
    }

    create() {
        const path = `${__dirname}/articles.json`;
    }

    // load(){

    // }

    // delete(){

    // }
}

export class ArticleDirector {
    constructor(public builder: typeof ArticleBuilder) {}
}
