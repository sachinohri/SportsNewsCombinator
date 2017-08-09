import {IArticle} from './IArticle';

export class News {
    private _articles: IArticle[];
    constructor(public status:string, public source:string, public sortBy:string ){}
    
    get Articles():IArticle[] {
        return this._articles;
    }

    set Articles(value: IArticle[]){
        if(value.length > 0 ){
            this._articles = value;
        }
    }
}