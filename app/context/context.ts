import React from 'react';
import {Tickers} from '../types';

export enum filters {
  rank = 'rank',
  priceUSD = 'price_usd',
  priceBTC = 'price_btc',
  change = 'change',
}

/**
 * Interfaz que describe el estado del contexto de los tickers en la aplicación.
 */
export type TickersState = {
  reverse: boolean;
  tickers: Tickers[];
  filter: filters;
  loading: boolean;
  rankRange: number;
  changeRange: number;
  handlePressFilter: ({pressFilter}: {pressFilter: filters}) => Promise<void>;
  fetchTickersDataPage: ({
    page,
    change,
  }: {
    page: number;
    change: number;
  }) => Promise<void>;
};

/**
 * Estado por defecto para el contexto de tickers.
 */
const defaultState = {
  reverse: false,
  tickers: [],
  filter: filters.rank,
  loading: false,
  rankRange: 0,
  changeRange: 0,
  handlePressFilter: async () => {},
  fetchTickersDataPage: async () => {},
};

/**
 * Contexto de React que proporciona el estado de los tickers.
 */
export const TickersContext = React.createContext<TickersState>(defaultState);
