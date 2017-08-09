export interface IArticle{
    author:string;
    title:string;
    description: string;
    url:string;
    urlToImage:string;
    publishedAt:string;

    getFormattedDate():string;
    
}