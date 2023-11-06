import {compareFieldNumericDesc} from '../../../app/utils/sort';
import {mockTickers} from '../../../__mock__/tickers';

describe('compareFieldNumericDesc', () => {
  it('should sort Tickers objects in descending order based on the specified field', () => {
    const sortedTickers = mockTickers
      .slice()
      .sort(compareFieldNumericDesc('price_usd'));

    for (let i = 1; i < sortedTickers.length; i++) {
      expect(parseFloat(sortedTickers[i - 1].price_usd)).toBeGreaterThanOrEqual(
        parseFloat(sortedTickers[i].price_usd),
      );
    }
  });

  it('should sort Tickers objects in descending order based on another specified field', () => {
    const sortedTickers = mockTickers
      .slice()
      .sort(compareFieldNumericDesc('percent_change_24h'));

    for (let i = 1; i < sortedTickers.length; i++) {
      expect(
        parseFloat(sortedTickers[i - 1].percent_change_24h),
      ).toBeGreaterThanOrEqual(parseFloat(sortedTickers[i].percent_change_24h));
    }
  });
});
