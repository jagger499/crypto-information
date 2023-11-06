import {StyleSheet, TextStyle} from 'react-native';
import {themes} from '../config/themes';

/**
 * Object that contains common styles for the application.
 */
export const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.danube[950],
  },

  flex_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  /**
   * Styles for text elements.
   */
  txt: {
    color: themes.colors.danube[100],
    fontSize: 13,
  },
  txt_title: {
    color: themes.colors.danube[100],
    fontSize: 19,
    fontWeight: themes.font.weight.bold as TextStyle['fontWeight'],
  },
  txt_subtitle: {
    color: themes.colors.danube[100],
    fontSize: 16,
    fontWeight: themes.font.weight.bold as TextStyle['fontWeight'],
  },
  txt_small: {
    color: themes.colors.danube[100],
    fontSize: 10,
  },
  txt_red: {
    color: themes.colors.red,
    fontWeight: themes.font.weight.bold as TextStyle['fontWeight'],
  },
  txt_green: {
    color: themes.colors.green,
    fontWeight: themes.font.weight.bold as TextStyle['fontWeight'],
  },

  /**
   * Style for the list or table view.
   */
  rowRank: {
    flex: 0.15,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rowFirst: {
    flex: 0.3,
  },
  rowSecond: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rowThird: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  debug: {
    borderWidth: 2,
    borderColor: themes.colors.red,
  },
});
