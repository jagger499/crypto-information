import {useState} from 'react';
import {Market} from '../types';

/**
 * Hook personalizado para obtener datos de mercado de un ticker.
 *
 * Este hook se utiliza para obtener datos de mercado de una criptomoneda específica
 * identificada por su ID.
 *
 * @param {object} options - Opciones para el hook.
 * @param {string} options.id - El ID de la criptomoneda.
 *
 * @returns {object} - Un objeto que contiene:
 *  - `loading` (boolean): Indica si la solicitud de datos está en curso.
 *  - `markets` (Market[]): La lista de datos de mercado de la criptomoneda.
 *  - `fetchTickerMarketsData` (function): Función para buscar y actualizar los datos de mercado.
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
