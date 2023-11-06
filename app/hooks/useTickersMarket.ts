import {useState} from 'react';
import {Market} from '../types';

/**
 * Custom hook for fetching market data for a ticker.
 *
 * This hook is used to retrieve market data for a specific cryptocurrency
 * identified by its ID.
 *
 * @param {object} options - Options for the hook.
 * @param {string} options.id - The ID of the cryptocurrency.
 *
 * @returns {object} - An object containing:
 *  - `loading` (boolean): Indicates if the data request is in progress.
 *  - `markets` (Market[]): The list of market data for the cryptocurrency.
 *  - `fetchTickerMarketsData` (function): Function to fetch and update market data.
 */

export const useTickersMarket = ({id}: {id: string}) => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTickerMarketsData = async () => {
    if (!id) {
      return;
    }
    setLoading(true);
    fetch(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
      .then(async res => {
        if (!res.ok) {
          throw new Error('Error: Network response was not ok');
        }
        return await res.json();
      })
      .then(res => {
        if (!res) {
          throw new Error('Not data available');
        }
        setMarkets(res);
      })
      .catch(e => console.error(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {loading, markets, fetchTickerMarketsData};
};
