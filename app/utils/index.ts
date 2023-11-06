/**
 * Checks if a string represents a negative number.
 *
 * @param str - The string to be evaluated as a number.
 * @returns `true` if the string is a negative number, otherwise returns `false`.
 */
export const isStringNegative = (str: string): boolean => {
  const number = parseFloat(str);

  if (!isNaN(number) && number < 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Pauses execution for a specified period of time.
 *
 * @param ms - The number of milliseconds to wait before resuming execution.
 * @returns A promise that resolves after the specified pause.
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
