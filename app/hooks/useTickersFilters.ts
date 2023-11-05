import {useState} from 'react';
import {Tickers} from '../types';
import {sleep} from '../utils';
import {filters} from '../context/context';
import {compareFieldNumericAsc, compareFieldNumericDesc} from '../utils/sort';
import {rangeToKey} from '../utils/rangeToKey';

/**
 * Hook personalizado para gestionar filtros en una lista de Tickers.
 *
 * @param props.tickers - La lista de Tickers a filtrar.
 * @param props.reverse - Indica si los resultados deben mostrarse en orden inverso.
 * @param props.changeRange - Rango de cambio a considerar en los filtros.
 * @param props.setTickers - Función para actualizar la lista de Tickers.
 * @param props.setReverse - Función para establecer el orden inverso.
 * @returns Un objeto con los Tickers filtrados, el filtro actual, la función para manejar el cambio de filtro y el estado de carga.
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
