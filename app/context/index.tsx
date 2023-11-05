import React, {useMemo, useState} from 'react';
import {TickersContext} from './context';
import {useTickers} from '../hooks/useTickers';
import {useTickersFilters} from '../hooks/useTickersFilters';

/**
 * Proveedor de datos de tickers para la aplicación.
 * Este componente proporciona acceso a los datos de tickers y las funciones de filtro.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Elementos hijos que se mostrarán dentro del proveedor.
 * @returns {JSX.Element} - Componente que envuelve a los elementos hijos con acceso a los datos de tickers.
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
