import {Tickers} from '..';

/**
 * Interfaz que define la estructura de las Props para el Detail
 * Modal mercado.
 */
export type DetailModalProp = {
  open: boolean;
  detail: Tickers;
};
