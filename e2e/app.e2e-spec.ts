import { AppPage } from './app.po';

describe('Movie Watch List', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movie Watch List');
  });
});
