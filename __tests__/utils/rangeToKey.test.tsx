import {rangeToKey} from '../../app/utils/rangeToKey';

const validRanges = [0, 1, 2];

describe('rangeToKey function', () => {
  it('should return the correct change key for valid ranges', () => {
    validRanges.forEach((range, index) => {
      const expectedKey = [
        'percent_change_7d',
        'percent_change_24h',
        'percent_change_1h',
      ][index];
      const result = rangeToKey(range);
      expect(result).toBe(expectedKey);
    });
  });
});
