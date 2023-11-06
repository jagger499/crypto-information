import {useState} from 'react';
import {Tickers} from '../types';
import {sleep} from '../utils';
import {filters} from '../context/context';
import {compareFieldNumericAsc, compareFieldNumericDesc} from '../utils/sort';
import {rangeToKey} from '../utils/rangeToKey';

/**
 * Custom hook for handling filters on a list of Tickers.
 *
 * @param props.tickers - The list of Tickers to filter.
 * @param props.reverse - Indicates whether the results should be displayed in reverse order.
 * @param props.changeRange - The range of change to consider in the filters.
 * @param props.setTickers - Function to update the list of Tickers.
 * @param props.setReverse - Function to set the reverse order.
 * @returns An object with the filtered Tickers, the current filter, the function to handle filter changes, and the loading state.
 */
export const useTickersFilters = ({
  tickers,
  reverse,
  changeRange,
  setReverse,
  setTickers,
}: {
  tickers: Tickers[];
  reverse: boolean;
  changeRange: number;
  setTickers: (param: Tickers[]) => void;
  setReverse: (param: boolean) => void;
}) => {
  const [filter, setFilter] = useState<filters>(filters.rank);
  const [loading, setLoading] = useState<boolean>(false);

  const load = async () => {
    await sleep(200);
    setLoading(false);
  };

  const handlePressFilter = async ({pressFilter}: {pressFilter: filters}) => {
    setLoading(true);
    if (filter === pressFilter) {
      setReverse(!reverse);
      await load();
      return;
    }

    if (filter !== pressFilter) {
      const auxTikers = [...tickers];
      setReverse(false);
      setFilter(pressFilter);

      const sortedFilter =
        pressFilter === filters.change
          ? auxTikers.sort(
              compareFieldNumericDesc(`${rangeToKey(changeRange)}`),
            )
          : auxTikers.sort(compareFieldNumericDesc(`${pressFilter}`));

      const sortedTikers =
        pressFilter === filters.rank
          ? auxTikers.sort(compareFieldNumericAsc('rank'))
          : sortedFilter;

      setTickers(sortedTikers);
      await load();
      return;
    }
  };

  return {
    tickers,
    filter,
    handlePressFilter,
    loading,
  };
};
