import { MoanaStoryPage } from './app.po';

describe('moana-story App', function() {
  let page: MoanaStoryPage;

  beforeEach(() => {
    page = new MoanaStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
