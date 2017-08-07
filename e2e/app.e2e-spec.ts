import { AxiaWebPage } from './app.po';

describe('axia-web App', function() {
  let page: AxiaWebPage;

  beforeEach(() => {
    page = new AxiaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
