import * as ua from '../src/modules/ua';
let userAgentGetter: any;
beforeAll(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});
test('test ua', () => {
  userAgentGetter.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 pplive StatusBarHeight/95');
  expect(ua.isAndroid()).toBe(false);
  expect(ua.isIos()).toBe(true);
  expect(ua.isPPLive()).toBe(true);
});