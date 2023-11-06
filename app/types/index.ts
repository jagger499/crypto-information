/**
 * Interface that represents an API result.
 */
export interface APIResult {
  data: Tickers[];
  info: Info;
}

/**
 * Type representing possible changes.
 */
export type change =
  | 'percent_change_7d'
  | 'percent_change_24h'
  | 'percent_change_1h';

/**
 * Interface defining the structure of a ticker.
 */
export interface Tickers {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: null | string;
  msupply: null | string;
}

/**
 * Type enumerating possible keys for Tickers objects, excluding those that can be of null type.
 */
export type TickersKeys =
  | 'id'
  | 'symbol'
  | 'name'
  | 'nameid'
  | 'rank'
  | 'price_usd'
  | 'percent_change_24h'
  | 'percent_change_1h'
  | 'percent_change_7d'
  | 'price_btc'
  | 'market_cap_usd'
  | 'volume24'
  | 'volume24a'
  | 'csupply';

export interface Info {
  coins_num: number;
  time: number;
}

/**
 * Interface defining the structure of a market.
 */
export interface Market {
  name: string;
  base: string;
  quote: string;
  price: number;
  price_usd: number;
  volume: number;
  volume_usd: number;
  time: number;
}
