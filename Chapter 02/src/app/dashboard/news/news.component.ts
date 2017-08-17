import { Component, OnInit } from '@angular/core';
import {News} from '../../../models/news';
import {Article} from '../../../models/article';


@Component({
  selector: 'snc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  latest_news: News = new News();
  errorMessage = '';
  feedType: string;
  source:string = "NFL";

  constructor(){}
  

  ngOnInit() {
    this.latest_news = this.seedNewsData();
  }
  
  private seedNewsData(): News{
    let news:News= new News();
    news.status = "ok";
    news.source="nfl";
    news.sortBy="top";
    news.articles = this.seedArcticles();
    return news;

  }
  private seedArcticles():Article[]{
    let articles:Article[] = new Array();


    articles.push({
            author:"Lakisha Jackson",
            title:"Mike Williams denies report on season-ending surgery",
            description:"Los Angeles Chargers first-round pick Mike Williams is denying reports that he might need season-ending back surgery.",
            url:"http://www.nfl.com/news/story/0ap3000000821316/article/mike-williams-denies-report-on-seasonending-surgery",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821315_thumbnail_200_150.jpg",
            publishedAt:"2017-07-22"
            });
        articles.push({
            author:"Jeremy Bergman",
            title:"Tamba Hali, upset with snaps, launches tweetstorm",
            description:"We've got ourselves a Saturday afternoon tweetstorm in late July, courtesy of Chiefs pass rusher Tamba Hali.",
            url:"http://www.nfl.com/news/story/0ap3000000821309/article/tamba-hali-upset-with-snaps-launches-tweetstorm",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821310_thumbnail_200_150.jpg",
            publishedAt:"2017-07-22"
            });
          articles.push({
            author:"Kevin Patra",
            title:"Antonio Brown to Le'Veon Bell: Steelers 'need' RB",
            description:"The Steelers' Antonio Brown says he had a conversation with teammate Le'Veon Bell in which he expressed how important Bell is to Pittsburgh.",
            url:"http://www.nfl.com/news/story/0ap3000000821334/article/antonio-brown-to-leveon-bell-steelers-need-rb",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/17/0ap3000000820197_thumbnail_200_150.jpg",
            publishedAt:"2017-07-24"
            });
          articles.push({
            author:"Edward Lewis",
            title:"Jabrill Peppers inks rookie deal with Cleveland Browns",
            description:"The Cleveland Browns have their 2017 draft class all wrapped up. The team announced Jabrill Peppers signed his rookie deal Sunday.",
            url:"http://www.nfl.com/news/story/0ap3000000821333/article/jabrill-peppers-inks-rookie-deal-with-cleveland-browns",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/23/0ap3000000821329_thumbnail_200_150.jpg",
            publishedAt:"2017-07-24"
            });
          articles.push({
            author:"Edward Lewis",
            title:"Jerry Jones: Jaylon Smith's knee 'looks really good'",
            description:"The Cowboys are going to be cautious with Jaylon Smith this summer, but per Jerry Jones, everything with the linebacker's knee \"looks really good.\"",
            url:"http://www.nfl.com/news/story/0ap3000000821327/article/jerry-jones-jaylon-smiths-knee-looks-really-good",
            urlToImage:"http://static.nfl.com/static/content/public/photo/2017/07/23/0ap3000000821326_thumbnail_200_150.jpg",
            publishedAt:"2017-07-23"
            });
         
    return articles;
  }

}


