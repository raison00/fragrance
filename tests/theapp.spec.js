import App from '../app';

describe('App Spec', () => {
  it('should test functions', () => {
    const myMeta = App.getMeta();
    expect(myMeta).toEqual(null);
  });

  it('should test start with #main', () => {
    App.start();
    expect(App.Feature.example).toEqual('example');
  });

  it('should test start without #main', () => {
    loadFixtures('fragrance.html');
    App.start();
    expect(App.Feature.example).toEqual('initialized');
  });
});
