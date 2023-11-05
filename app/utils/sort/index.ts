import {Tickers, TickersKeys} from '../../types';

/**
 * Compara dos objetos del tipo Tickers por el valor numérico del campo especificado en orden descendente.
 *
 * @param field - El nombre del campo por el cual comparar los objetos Tickers.
 * @param a - El primer objeto Tickers a comparar.
 * @param b - El segundo objeto Tickers a comparar.
 * @returns Un número negativo si a[field] es mayor que b[field], un número positivo si b[field] es mayor que a[field], o 0 si son iguales.
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
 * Compara dos objetos del tipo Tickers por un campo específico de forma ascendente.
 *
 * @param field - El nombre del campo por el cual comparar los objetos.
 * @param a - El primer objeto a comparar.
 * @param b - El segundo objeto a comparar.
 * @returns Un número negativo si `a` es menor que `b`, un número positivo si `a` es mayor que `b`,
 *          o 0 si son iguales en función del valor del campo.
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
