import {Tickers, TickersKeys} from '../../types';

/**
 * Compares two objects of the Tickers type based on the numeric value of the specified field in descending order.
 *
 * @param field - The name of the field by which to compare the Tickers objects.
 * @param a - The first Tickers object to compare.
 * @param b - The second Tickers object to compare.
 * @returns A negative number if a[field] is greater than b[field, a positive number if b[field] is greater than a[field], or 0 if they are equal.
 */
export const compareFieldNumericDesc = (field: TickersKeys) => {
  return function (a: Tickers, b: Tickers): number {
    const numA =
      typeof a[field] === 'string' ? parseFloat(a[field] as string) : a[field];
    const numB =
      typeof b[field] === 'string' ? parseFloat(b[field] as string) : b[field];

    if (numA < numB) {
      return 1;
    } else if (numA > numB) {
      return -1;
    } else {
      return 0;
    }
  };
};

/**
 * Compares two objects of type Tickers by a specific field in ascending order.
 *
 * @param field - The name of the field by which to compare the objects.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A negative number if `a` is less than `b`, a positive number if `a` is greater than `b`,
 *          or 0 if they are equal based on the value of the field.
 */
export const compareFieldNumericAsc = (field: TickersKeys) => {
  return function (a: Tickers, b: Tickers): number {
    const numA =
      typeof a[field] === 'string' ? parseFloat(a[field] as string) : a[field];
    const numB =
      typeof b[field] === 'string' ? parseFloat(b[field] as string) : b[field];

    if (numA < numB) {
      return -1;
    } else if (numA > numB) {
      return 1;
    } else {
      return 0;
    }
  };
};
