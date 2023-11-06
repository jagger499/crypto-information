import {renderHook, act} from '@testing-library/react-hooks';
import {useTickers} from '../../app/hooks/useTickers';
import {mockParams} from '../../__mock__/hooks/useTickers';
import {Tickers} from '../../app/types';
import {tickersShape} from '../../__mock__/tickers';

describe('useTickers', () => {
  it('should fetch tickers data on initial render', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useTickers(mockParams),
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.tickers).toEqual(expect.arrayContaining([]));
    for (const ticker of result.current.tickers) {
      expect(ticker).toMatchObject<Tickers>(tickersShape as Tickers);
    }
  });

  it('should fetch tickers data page with specific parameters', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useTickers(mockParams),
    );

    await waitForNextUpdate();

    act(() => {
      result.current.fetchTickersDataPage({page: 1, change: 24});
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    for (const ticker of result.current.tickers) {
      expect(ticker).toMatchObject<Tickers>(tickersShape as Tickers);
    }
  });
});
