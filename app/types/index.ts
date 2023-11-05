/**
 * Interfaz que representa un resultado de API.
 */
export interface APIResult {
  data: Tickers[];
  info: Info;
}

/**
 * Tipo que representa los cambios posibles.
 */
export type change =
  | 'percent_change_7d'
  | 'percent_change_24h'
  | 'percent_change_1h';

/**
 * Interfaz que define la estructura de un ticker.
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
 * Tipo que enumera las claves posibles para los objetos de tipo Tickers.
 * excluyendo los que puedan ser de tipo null
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
 * Interfaz que define la estructura de un mercado.
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
