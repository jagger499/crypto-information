import {renderHook, act} from '@testing-library/react-hooks';
import {mockUseTickerFiltersParams} from '../../__mock__/hooks/useTickersFilters';
import {useTickersFilters} from '../../app/hooks/useTickersFilters';
import {filters} from '../../app/context/context';
import {sleep} from '../../app/utils';

describe('useTickersFilters', () => {
  const setTickers = jest.fn();
  const setReverse = jest.fn();

  const hookProps = {...mockUseTickerFiltersParams, setTickers, setReverse};

  it('should initialize with default values', () => {
    const {result} = renderHook(() => useTickersFilters(hookProps));

    expect(result.current.filter).toBe('rank');
    expect(result.current.loading).toBe(false);
  });

  it('should change the filter when clicking the same filter', async () => {
    const {result} = renderHook(() => useTickersFilters(hookProps));

    await act(async () => {
      result.current.handlePressFilter({pressFilter: filters.rank});
    });

    expect(result.current.filter).toBe('rank');
    expect(setReverse).toHaveBeenCalled();
  });

  it('should change the filter and order when clicking a new filter', async () => {
    const {result} = renderHook(() => useTickersFilters(hookProps));

    await act(async () => {
      result.current.handlePressFilter({pressFilter: filters.change});
    });

    expect(result.current.filter).toBe(filters.change);
    expect(setReverse).toHaveBeenCalled();
    expect(setTickers).toHaveBeenCalled();
  });

  it('should handle loading correctly', async () => {
    const {result} = renderHook(() => useTickersFilters(hookProps));

    await act(async () => {
      result.current.handlePressFilter({pressFilter: filters.rank});
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await sleep(200);
    });

    expect(result.current.loading).toBe(false);
  });
});
