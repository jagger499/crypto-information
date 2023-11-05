import {StyleSheet} from 'react-native';
import {height, themes, width} from '../../config/themes';

export const styles = StyleSheet.create({
  container: {
    width,
    padding: 20,
    backgroundColor: themes.colors.danube[950],
    rowGap: 20,
    paddingTop: 30,
    paddingBottom: 0,
    minHeight: height - 30,
  },
  title: {
    alignItems: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: themes.colors.danube[800],
  },
  row: {
    flexDirection: 'row',
    columnGap: 15,
  },
  rowColor: {
    backgroundColor: themes.colors.danube[900],
    padding: 15,
    borderRadius: 15,
  },
  tableRow: {
    flex: 0.25,
  },
  close: {
    position: 'absolute',
    right: 0,
    padding: 20,
  },
});
