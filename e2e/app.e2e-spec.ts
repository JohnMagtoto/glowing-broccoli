import { GlowingBrocolliPage } from './app.po';

describe('glowing-brocolli App', () => {
  let page: GlowingBrocolliPage;

  beforeEach(() => {
    page = new GlowingBrocolliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
