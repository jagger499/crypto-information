import {useEffect, useState} from 'react';
import {Tickers} from '../types';

/**
 * Hook para obtener información de tickers de criptomonedas.
 *
 * @param {number} props.rankRange - Rango de clasificación de los tickers.
 * @param {number} props.changeRange - Rango de cambio de los tickers.
 * @param {(param: boolean) => void} props.setReverse - Función para establecer el orden inverso.
 * @param {(param: number) => void} props.setRankRange - Función para establecer el rango de clasificación.
 * @param {(param: number) => void} props.setChangeRange - Función para establecer el rango de cambio.
 * @returns {Object} - Objeto que contiene los datos y funciones relacionados con los tickers.
 */
export const useTickers = ({
  rankRange,
  changeRange,
  setReverse,
  setRankRange,
  setChangeRange,
}: {
  rankRange: number;
  changeRange: number;
  setReverse: (param: boolean) => void;
  setRankRange: (param: number) => void;
  setChangeRange: (param: number) => void;
}) => {
  const [tickers, setTickers] = useState<Tickers[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTickersData = async () => {
    setLoading(true);
    fetch('https://api.coinlore.net/api/tickers/')
      .then(async res => {
        if (!res.ok) {
          throw new Error('Error: Network response was not ok');
        }
        return await res.json();
      })
      .then(res => {
        if (!res.data) {
          throw new Error('Not data available');
        }
        setTickers(res.data);
      })
      .catch(e => console.error(e))
      .finally(() => {
        setReverse(false);
        setLoading(false);
      });
  };

  const fetchTickersDataPage = async ({
    page,
    change,
  }: {
    page: number;
    change: number;
  }) => {
    if (change === changeRange && rankRange === page) {
      return;
    }

    if (change !== changeRange) {
      setChangeRange(change);
      setReverse(false);
    }

    if (rankRange === page) {
      return;
    }

    setLoading(true);
    if (page === 0) {
      setRankRange(page);
      await fetchTickersData();
      return;
    }
    setLoading(true);
    await fetch(
      `https://api.coinlore.net/api/tickers/?start=${100 * page}&limit=100`,
    )
      .then(async res => {
        if (!res.ok) {
          throw new Error('Error: Network response was not ok');
        }
        return await res.json();
      })
      .then(res => {
        if (!res.data) {
          throw new Error('Not data available');
        }
        setTickers(res.data);
      })
      .catch(e => console.error(e))
      .finally(() => {
        setRankRange(page);
        setReverse(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTickersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, tickers, setLoading, setTickers, fetchTickersDataPage};
};
