import { SportsNewsCombinatorPage } from './app.po';

describe('sports-news-combinator App', () => {
  let page: SportsNewsCombinatorPage;

  beforeEach(() => {
    page = new SportsNewsCombinatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
