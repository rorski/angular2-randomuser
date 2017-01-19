import { Angular2RandomuserPage } from './app.po';

describe('angular2-randomuser App', function() {
  let page: Angular2RandomuserPage;

  beforeEach(() => {
    page = new Angular2RandomuserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
