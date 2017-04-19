import { VscodeNgLanguageServiceReproPage } from './app.po';

describe('vscode-ng-language-service-repro App', () => {
  let page: VscodeNgLanguageServiceReproPage;

  beforeEach(() => {
    page = new VscodeNgLanguageServiceReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
