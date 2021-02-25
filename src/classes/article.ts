import fs from "fs";
import { v4 } from "uuid";

export enum eArticle {
    Guest = "Guest",
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

    protected get instance():Article {
        
                if( !this._instance ){
                    
                    this._instance = new this.baseArticle

        
                }
        
                return this._instance;
            }

    setId(){
        this.instance.id = v4()
    }

    setTitle(title:string){
        this.instance.title = title;
    }
    
    setDescription(desc:string){
        this.instance.description = desc; 
    }

    setBody(body:string){
        this.instance.body = body; 
    }

    setType(type:string){
        this.instance.type = type;
        switch(type){
            case eArticle.Guest: this.baseArticle; break;
            case eArticle.Premium: this.baseArticle; break;
            case eArticle.Paid: this.baseArticle; break;
            default: throw new Error ("Your Article Needs To Have a Type")
        }
    }

    publishArticle(){

        const publish = {
            id: this._instance.id,
            title: this._instance.title,
            description: this._instance.description,
            body: this._instance.body,
            type: this._instance.type
        };
        const artData = JSON.stringify(publish)
        const path = `${__dirname}/articles/${this._instance.title}`;
        if(!fs.existsSync(`${__dirname}/articles`)){
            fs.mkdirSync(`${__dirname}/articles`)
        }
        fs.writeFileSync(path, artData, "utf-8");
        return publish;
    }

    // delete(){

    // }
}

export class ArticleDirector {
    constructor(public builder: typeof ArticleBuilder) {}
}

