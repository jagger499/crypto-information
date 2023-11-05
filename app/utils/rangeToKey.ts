import {change} from '../types';

/**
 * Convierte un número de rango en una clave de cambio.
 *
 * @param range - El número de rango para convertir en clave de cambio.
 * @returns La clave de cambio correspondiente al número de rango.
 */
export const rangeToKey = (range: number): change => {
  const rangeKeys: change[] = [
    'percent_change_7d',
    'percent_change_24h',
    'percent_change_1h',
  ];
  return rangeKeys[range];
};
