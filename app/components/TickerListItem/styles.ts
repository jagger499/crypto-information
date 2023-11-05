import {StyleSheet, TextStyle} from 'react-native';
import {themes} from '../../config/themes';

export const ITEM_SIZE = 50;

export const styles = StyleSheet.create({
  tickerContainer: {
    flexDirection: 'row',
    columnGap: 5,
    paddingHorizontal: 20,
    marginVertical: 16,
    height: ITEM_SIZE,
  },
  symbol: {
    width: 70,
    backgroundColor: themes.colors.danube[600],
    padding: 5,
    paddingLeft: 8,
    borderRadius: 15,
  },
  symbolText: {
    color: themes.colors.danube[50],
    fontWeight: themes.font.weight.semibold as TextStyle['fontWeight'],
  },
  priceUsd: {
    marginLeft: 8,
  },
});
