import React from 'react';
import {Tickers} from '../types';

export enum filters {
  rank = 'rank',
  priceUSD = 'price_usd',
  priceBTC = 'price_btc',
  change = 'change',
}

/**
 * Interface that describes the state of the tickers context in the application.
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
 * Default state for the tickers context.
 */
const defaultState: TickersState = {
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
 * React context that provides the state of the tickers.
 */
export const TickersContext = React.createContext<TickersState>(defaultState);
