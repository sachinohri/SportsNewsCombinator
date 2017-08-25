import {IArticle} from './IArticle';

export class Article implements IArticle{
    author:string;
    title:string;
    description: string;
    url:string;
    urlToImage:string;
    publishedAt:string;

    // returns formatted date from the published at field
    getFormattedDate():string{
        let date = new Date(this.publishedAt);
        let year = date.getFullYear();
        let month: number|string = date.getMonth()+1;
        let dt: number | string = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }
        let finaldate = year+'-' + month + '-'+dt;
        console.log(finaldate);
        return finaldate;
    }
}