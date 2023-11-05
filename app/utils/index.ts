/**
 * Comprueba si una cadena representa un número negativo.
 *
 * @param str - La cadena que se va a evaluar como número.
 * @returns `true` si la cadena es un número negativo, de lo contrario, devuelve `false`.
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
 * Pausa la ejecución durante un período de tiempo especificado.
 *
 * @param ms - El número de milisegundos que se deben esperar antes de que se reanude la ejecución.
 * @returns Una promesa que se resuelve después de la pausa especificada.
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
