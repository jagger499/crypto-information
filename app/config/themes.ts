import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

const header_height = 140;

/**
 * Application themes containing information about colors, fonts, and sizes.
 */
export const themes = {
  colors: {
    danube: {
      '50': '#f0f7fe',
      '100': '#ddedfc',
      '200': '#c3e1fa',
      '300': '#9bcef5',
      '400': '#6bb4ef',
      '500': '#539cea',
      '600': '#337add',
      '700': '#2a65cb',
      '800': '#2852a5',
      '900': '#264882',
      '950': '#1b2c50',
    },
    red: '#d62c2c',
    green: '#0dac2e',
  },
  font: {
    weight: {
      semibold: '600',
      bold: 'bold',
    },
  },
  sizes: {
    HEADER_HEIGHT: header_height,
    HEIGHT: height,
    VIEW_HEIGHT: height - (header_height + 20),
  },
};
