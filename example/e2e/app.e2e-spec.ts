import { ExampleFormPage } from './app.po';

describe('example-form App', () => {
  let page: ExampleFormPage;

  beforeEach(() => {
    page = new ExampleFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
