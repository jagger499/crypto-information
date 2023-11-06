import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TickersContext} from '../../app/context/context';
import {mockContextValue} from '../../__mock__/context';
import {Header} from '../../app/components/Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    const showFilters = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={mockContextValue}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const header = getByTestId('header');

    expect(header).toBeTruthy();
  });

  it('renders without crash and have correct texts', () => {
    const showFilters = jest.fn();

    const {getByTestId, getByText} = render(
      <TickersContext.Provider value={mockContextValue}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const header = getByTestId('header');
    const title = getByText('ONE MILLION UP');
    const number = getByText('#');
    const filters = getByText('Selected filters:');
    const price_usd = getByText('Price (USD)');
    const price_btc = getByText('Price (BTC)');

    expect(header).toBeTruthy();
    expect(title).toBeTruthy();
    expect(number).toBeTruthy();
    expect(filters).toBeTruthy();
    expect(price_usd).toBeTruthy();
    expect(price_btc).toBeTruthy();
  });

  it('press filter make and have interaction with showFilteer', () => {
    const showFilters = jest.fn();
    const handlePressFilter = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, handlePressFilter}}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const row = getByTestId('select-filter-column-header');
    fireEvent.press(row);
    expect(showFilters).toHaveBeenCalled();
  });

  it('press header rank row make and interaction with context', () => {
    const showFilters = jest.fn();
    const handlePressFilter = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, handlePressFilter}}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const row = getByTestId('rank-column-header');
    fireEvent.press(row);
    expect(handlePressFilter).toHaveBeenCalled();
  });

  it('press header price usd row make and interaction with context', () => {
    const showFilters = jest.fn();
    const handlePressFilter = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, handlePressFilter}}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const row = getByTestId('price-usd-column-header');
    fireEvent.press(row);
    expect(handlePressFilter).toHaveBeenCalled();
  });

  it('press header price btc row make and interaction with context', () => {
    const showFilters = jest.fn();
    const handlePressFilter = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, handlePressFilter}}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const row = getByTestId('price-btc-column-header');
    fireEvent.press(row);
    expect(handlePressFilter).toHaveBeenCalled();
  });

  it('press header change row make and interaction with context', () => {
    const showFilters = jest.fn();
    const handlePressFilter = jest.fn();

    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, handlePressFilter}}>
        <Header showFilters={showFilters} />
      </TickersContext.Provider>,
    );

    const row = getByTestId('change-column-header');
    fireEvent.press(row);
    expect(handlePressFilter).toHaveBeenCalled();
  });
});
