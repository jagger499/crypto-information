import {change} from '../types';

/**
 * Converts a range number into a shift key.
 *
 * @param range - The range number to convert into a shift key.
 * @returns The shift key corresponding to the range number.
 */
export const rangeToKey = (range: number): change => {
  const rangeKeys: change[] = [
    'percent_change_7d',
    'percent_change_24h',
    'percent_change_1h',
  ];
  return rangeKeys[range];
};
