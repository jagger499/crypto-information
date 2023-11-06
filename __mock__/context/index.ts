import {filters} from '../../app/context/context';

export const mockContextValue = {
  reverse: false,
  tickers: [],
  filter: filters.rank,
  loading: false,
  rankRange: 0,
  changeRange: 0,
  handlePressFilter: async () => {},
  fetchTickersDataPage: async () => {},
};
