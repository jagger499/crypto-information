/**
 * @format
 */
import React from 'react';
import 'jest';
import 'react-native';
import {describe, it} from '@jest/globals';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders without crashing and have inside the home screen component', () => {
    const {getByTestId} = render(<App />);
    const element = getByTestId('home-screen');

    expect(element).toBeTruthy();
  });
});
