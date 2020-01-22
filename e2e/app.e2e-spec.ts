import { PoligranPage } from './app.po';

describe('poligran App', function() {
  let page: PoligranPage;

  beforeEach(() => {
    page = new PoligranPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
