import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import fetch from 'unfetch';
import 'rxjs/add/operator/map';

import {News} from '../../models/news';

@Injectable()
export class NewsapiService {
baseUrl: string;
static apiKey:string="b07f98f6575d47d99fd6057668f21cb2";
  constructor() {
    this.baseUrl = 'https://newsapi.org/v1/articles';
   }
   fetchFeed(source: string, sortBy: string): Observable<News> {
    return lazyFetch(`${this.baseUrl}/?source=${source}&sortBy=${sortBy}&apiKey=${NewsapiService.apiKey}`);
  }
}
function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if (!cancelToken) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
