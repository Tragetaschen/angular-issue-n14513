import { AngularIssueN14513Page } from './app.po';

describe('angular-issue-n14513 App', () => {
  let page: AngularIssueN14513Page;

  beforeEach(() => {
    page = new AngularIssueN14513Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
