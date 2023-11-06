import {Tickers} from '..';

/**
 * Interface that defines the structure of Props for the Detail Modal in the market.
 */
export type DetailModalProp = {
  open: boolean;
  detail: Tickers;
};
