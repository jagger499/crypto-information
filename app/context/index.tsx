import React, {useMemo, useState} from 'react';
import {TickersContext} from './context';
import {useTickers} from '../hooks/useTickers';
import {useTickersFilters} from '../hooks/useTickersFilters';

/**
 * Ticker data provider for the application.
 * This component provides access to ticker data and filtering functions.
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - Child elements to be displayed within the provider.
 * @returns {JSX.Element} - Component that wraps child elements with access to ticker data.
 */
export const TickersProvider = ({children}: any) => {
  const [reverse, setReverse] = useState<boolean>(false);
  const [rankRange, setRankRange] = useState<number>(0);
  const [changeRange, setChangeRange] = useState<number>(0);

  const {
    tickers,
    setTickers,
    loading: fetchLoading,
    fetchTickersDataPage,
  } = useTickers({
    rankRange,
    setChangeRange,
    changeRange,
    setReverse,
    setRankRange,
  });

  const {
    handlePressFilter,
    loading: filterLoading,
    filter,
  } = useTickersFilters({
    reverse,
    tickers,
    changeRange,
    setReverse,
    setTickers,
  });

  const loading = filterLoading || fetchLoading;

  const tickersValue = useMemo(
    () => ({
      reverse,
      tickers,
      filter,
      loading,
      rankRange,
      changeRange,
      handlePressFilter,
      fetchTickersDataPage,
    }),
    [
      reverse,
      tickers,
      filter,
      loading,
      rankRange,
      changeRange,
      handlePressFilter,
      fetchTickersDataPage,
    ],
  );

  return (
    <TickersContext.Provider value={{...tickersValue, loading}}>
      {children}
    </TickersContext.Provider>
  );
};
