import {compareFieldNumericDesc} from '../../../app/utils/sort'; // Asegúrate de importar el archivo correcto
import {mockTickers} from '../../../__mock__/tickers';

describe('compareFieldNumericDesc', () => {
  it('debería ordenar los objetos Tickers en orden descendente según el campo especificado', () => {
    const sortedTickers = mockTickers
      .slice()
      .sort(compareFieldNumericDesc('price_usd'));

    // Comprueba si los objetos están en orden descendente según el campo 'price_usd'
    for (let i = 1; i < sortedTickers.length; i++) {
      expect(parseFloat(sortedTickers[i - 1].price_usd)).toBeGreaterThanOrEqual(
        parseFloat(sortedTickers[i].price_usd),
      );
    }
  });

  it('debería ordenar los objetos Tickers en orden descendente según otro campo especificado', () => {
    const sortedTickers = mockTickers
      .slice()
      .sort(compareFieldNumericDesc('percent_change_24h'));

    // Comprueba si los objetos están en orden descendente según el campo 'percent_change_24h'
    for (let i = 1; i < sortedTickers.length; i++) {
      expect(
        parseFloat(sortedTickers[i - 1].percent_change_24h),
      ).toBeGreaterThanOrEqual(parseFloat(sortedTickers[i].percent_change_24h));
    }
  });
});
