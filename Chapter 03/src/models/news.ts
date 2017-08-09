import {Article} from './article';

export class News {
    private _articles: Article[];
    constructor(public status:string, public source:string, public sortBy:string ){}
    
    get Articles():Article[] {
        return this._articles;
    }

    set Articles(value: Article[]){
        if(value.length > 0 ){
            this._articles = value;
        }
    }
}