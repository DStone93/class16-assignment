import fs from 'fs';
import { v4 } from 'uuid';

export enum eArticle {
    Guest = "Free",
    Premium = "Premium",
    Paid = "Paid"
}

export class Article {
    id: string;
    title: string;
    description: string;
    body: string;
    type: string;
}


export class ArticleBuilder {

    baseArticle = Article;

    private _instance: Article;


    protected get instance():Article {
        // if we don't have an instance of BikeBuilder
        if( !this._instance ){
            this._instance = new this.baseArticle()

        }
        // if we do have an instance already, return it.
        return this._instance;
    }

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

    loadArticle(){
        return this._instance;
    }

    delete(){

    }
}


















// export class ArticleDirector {
//     constructor( public builder:typeof ArticleBuilder){

//     }

//     private blankArticle(){
//         const builder = new this.builder();
//         builder.setId();
//         return builder;
//     }

//     guestArticle (){
//         const builder = this.blankArticle();
//         builder.

//     }

// }

