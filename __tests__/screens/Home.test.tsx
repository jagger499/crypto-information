import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../app/screens/Home';
import {TickersContext} from '../../app/context/context';
import {mockContextValue} from '../../__mock__/context';
import {mockTickers} from '../../__mock__/tickers';

describe('Home screen', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(
      <TickersContext.Provider value={mockContextValue}>
        <Home />
      </TickersContext.Provider>,
    );
    const homeView = getByTestId('home-screen');

    expect(homeView).toBeTruthy();
  });

  it('renders with header', () => {
    const {getByTestId} = render(
      <TickersContext.Provider value={mockContextValue}>
        <Home />
      </TickersContext.Provider>,
    );
    const homeView = getByTestId('home-screen');
    const header = getByTestId('header');

    expect(homeView).toBeTruthy();
    expect(header).toBeTruthy();
  });

  it('render correctly loading', () => {
    const {getByTestId} = render(
      <TickersContext.Provider value={{...mockContextValue, loading: true}}>
        <Home />
      </TickersContext.Provider>,
    );
    const homeView = getByTestId('home-screen');
    const homeLoading = getByTestId('home-loading');

    expect(homeView).toBeTruthy();
    expect(homeLoading).toBeTruthy();
  });

  it('render correctly ticker list', () => {
    const {getByTestId} = render(
      <TickersContext.Provider
        value={{...mockContextValue, loading: false, tickers: mockTickers}}>
        <Home />
      </TickersContext.Provider>,
    );
    const homeView = getByTestId('home-screen');
    const list = getByTestId('list-component');

    expect(homeView).toBeTruthy();
    expect(list).toBeTruthy();
  });

  it('render correctly ticker list and list item', () => {
    const {getByTestId, getAllByTestId} = render(
      <TickersContext.Provider
        value={{...mockContextValue, loading: false, tickers: mockTickers}}>
        <Home />
      </TickersContext.Provider>,
    );
    const homeView = getByTestId('home-screen');
    const list = getAllByTestId('item-list-component');

    expect(homeView).toBeTruthy();
    expect(list).toBeTruthy();
  });
});
