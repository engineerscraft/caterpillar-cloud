import { WebGuiPage } from './app.po';

describe('web-gui App', () => {
  let page: WebGuiPage;

  beforeEach(() => {
    page = new WebGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
