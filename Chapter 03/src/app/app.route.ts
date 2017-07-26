import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './dashboard/news/news.component';

const feedRoutes = [{
 // path: '',
  //component: NewsComponent
}];

const routes: Routes = [
  {path: '', redirectTo: 'nfl', pathMatch: 'full'},
  {
    path: 'nfl',
    children: feedRoutes,
    data: {feedType: 'nfl-news',source:'nfl'}
  },
  {
    path: 'espn',
    children: feedRoutes,
    data: {feedType: 'espn',source:'espn'}
  },
  {
    path: 'fox',
    children: feedRoutes,
    data: {feedType: 'fox-sports',source:'Fox Sports'}
  },
  {
    path: 'bbc',
    children: feedRoutes,
    data: {feedType: 'bbc-sport',source:'BBC Sports'}
  }
  
];


// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
