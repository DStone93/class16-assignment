import fs from 'fs';
import { v4 } from 'uuid';

enum eArticle {
    Guest = "Free",
    Premium = "Premium",
    Paid = "Paid"
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

    setId(){
        this._instance.id = v4()
    }

    setTitle(title:string){
        this._instance.title = title; 
    }
    
    setDescription(desc:string){
        this._instance.description = desc; 
    }

    setBody(body:string){
        this._instance.body = body; 
    }

    setType(type:eArticle){
        switch(type){
            case eArticle.Guest: this.baseArticle; break;
            case eArticle.Premium: this.baseArticle; break;
            case eArticle.Paid: this.baseArticle; break;
            default: throw new Error ("Your Article Needs To Have a Type")
        }
    }

    create(){
        const path = `${__dirname}/articles.json`;
    }

    load(){

    }

    delete(){

    }
}

export class ArticleDirector {
    constructor( public builder:typeof ArticleBuilder){

    }


}

// const director = new ArticleDirector(ArticleBuilder);
// const article = director.whatever.create()
