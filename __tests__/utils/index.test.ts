import {isStringNegative, sleep} from '../../app/utils';

test('isStringNegative funciona correctamente', () => {
  expect(isStringNegative('-5')).toBe(true);

  expect(isStringNegative('10')).toBe(false);

  expect(isStringNegative('abc')).toBe(false);

  expect(isStringNegative('')).toBe(false);

  expect(isStringNegative('0')).toBe(false);

  expect(isStringNegative('-3.14')).toBe(true);

  expect(isStringNegative('2.718')).toBe(false);
});

describe('sleep', () => {
  it('should resolve after a specified delay', async () => {
    const delay = 1000; // 1 second
    const start = Date.now();
    await sleep(delay);
    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(delay);
  });
});
