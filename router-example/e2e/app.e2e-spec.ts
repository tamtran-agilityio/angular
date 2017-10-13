import { ModuleExamplePage } from './app.po';

describe('module-example App', () => {
  let page: ModuleExamplePage;

  beforeEach(() => {
    page = new ModuleExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
