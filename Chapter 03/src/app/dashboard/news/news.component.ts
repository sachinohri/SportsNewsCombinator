import { Component, OnInit } from '@angular/core';
import {News} from '../../../models/News';
import {IArticle} from '../../../models/IArticle';
import {Article} from '../../../models/Article';


@Component({
  selector: 'snc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  source:string = "nfl";
  latest_news: News;
  
  constructor(){}

  ngOnInit() {
    this.latest_news = this.seedNewsData();
  }
  
  private seedNewsData(): News{
    let news:News= new News("Ok","NFL","top");
    news.Articles = this.seedArcticles();
    return news;

  }
  private seedArcticles():IArticle[]{
    let articles:IArticle[] = new Array();
    let tempArticle:Article= new Article();
    tempArticle.author="Lakisha Jackson";     
    tempArticle.title="Mike Williams denies report on season-ending surgery";
    tempArticle.description = "Los Angeles Chargers first-round pick Mike Williams is denying reports that he might need season-ending back surgery.";
    tempArticle.url="http://www.nfl.com/news/story/0ap3000000821316/article/mike-williams-denies-report-on-seasonending-surgery";
    tempArticle.urlToImage="http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821315_thumbnail_200_150.jpg";
    tempArticle.publishedAt ="2017-07-22T23:21:00Z";
    articles.push(tempArticle);

    tempArticle = new Article();
    tempArticle.author = "Jeremy Bergman";
    tempArticle.title="Tamba Hali, upset with snaps, launches tweetstorm";
    tempArticle.description="We've got ourselves a Saturday afternoon tweetstorm in late July, courtesy of Chiefs pass rusher Tamba Hali. The veteran bemoaned his lack of snaps in the Chiefs' playoff loss to Pittsburgh.";
    tempArticle.url="http://www.nfl.com/news/story/0ap3000000821309/article/tamba-hali-upset-with-snaps-launches-tweetstorm";
    tempArticle.urlToImage="http://static.nfl.com/static/content/public/photo/2017/07/22/0ap3000000821310_thumbnail_200_150.jpg";
    tempArticle.publishedAt="2017-07-22T20:30:00Z";
    articles.push(tempArticle);

    tempArticle = new Article();
    tempArticle.author = "Kevin Patra";
    tempArticle.title ="Antonio Brown to Le'Veon Bell: Steelers 'need' RB";
    tempArticle.description="The Steelers' Antonio Brown says he had a \"top secret\" conversation with teammate Le'Veon Bell in which the star wide receiver expressed how important Bell is to Pittsburgh.";
    tempArticle.url="http://www.nfl.com/news/story/0ap3000000821334/article/antonio-brown-to-leveon-bell-steelers-need-rb";
    tempArticle.urlToImage="http://static.nfl.com/static/content/public/photo/2017/07/17/0ap3000000820197_thumbnail_200_150.jpg";
    tempArticle.publishedAt="2017-07-24T11:43:48Z";
    articles.push(tempArticle);

    tempArticle = new Article();
    tempArticle.author ="Edward Lewis";
    tempArticle.title ="Jabrill Peppers inks rookie deal with Cleveland Browns";
    tempArticle.description ="The Cleveland Browns have their 2017 draft class all wrapped up. The team announced Jabrill Peppers signed his rookie deal Sunday, making him the last Browns pick to sign.";
    tempArticle.url ="http://www.nfl.com/news/story/0ap3000000821333/article/jabrill-peppers-inks-rookie-deal-with-cleveland-browns";
    tempArticle.urlToImage="http://static.nfl.com/static/content/public/photo/2017/07/23/0ap3000000821329_thumbnail_200_150.jpg";
    tempArticle.publishedAt="2017-07-24T01:22:00Z";
    articles.push(tempArticle);
    
    tempArticle = new Article();
    tempArticle.author="Edward Lewis";
    tempArticle.title="Jerry Jones: Jaylon Smith's knee 'looks really good'";
    tempArticle.description="The Cowboys are going to be cautious with Jaylon Smith this summer, but per Jerry Jones, everything with the linebacker's knee \"looks really good.\" What else did we learn at Cowboys camp Sunday?";
    tempArticle.url="http://www.nfl.com/news/story/0ap3000000821327/article/jerry-jones-jaylon-smiths-knee-looks-really-good";
    tempArticle.urlToImage="http://static.nfl.com/static/content/public/photo/2017/07/23/0ap3000000821326_thumbnail_200_150.jpg";
    tempArticle.publishedAt="2017-07-23T23:49:00Z";
    articles.push(tempArticle);
  
    return articles;
  }

}


