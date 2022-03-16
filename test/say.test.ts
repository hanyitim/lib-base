import * as say from '../src/modules/say';
let originalLog: any;
let originalWarn: any;
let originalError: any;
beforeAll(() => {
  // 保留原 console 函数引用
  originalLog = global.console.log;
  originalWarn = global.console.warn;
  originalError = global.console.error;
  // 用 jest.fn() 替换，方便模拟
  global.console.log = jest.fn();
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
});
// 所有测试用例运行之后
afterAll(() => { // 可以换成 afterEach
  // 恢复原 console 函数引用
  global.console.log = originalLog;
  global.console.warn = originalWarn;
  global.console.error = originalError;
});
test('console.log the text "hello yagao"', () => {
  say.sayHello('yagao');
  expect(console.log).toHaveBeenCalledWith('hello yagao');
});