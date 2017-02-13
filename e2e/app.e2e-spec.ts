import { ChironPage } from './app.po';

describe('chiron App', function() {
  let page: ChironPage;

  beforeEach(() => {
    page = new ChironPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
