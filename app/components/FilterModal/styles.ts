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
  filter: {
    padding: 15,
    paddingVertical: 15,
    backgroundColor: themes.colors.danube[900],
    borderRadius: 20,
    borderWidth: 1,
    borderColor: themes.colors.danube[900],
  },
  filterSelected: {
    borderWidth: 1,
    borderColor: themes.colors.danube[100],
  },
  button: {
    padding: 40,
    paddingVertical: 20,
    backgroundColor: themes.colors.danube[600],
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondary: {
    padding: 40,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: themes.colors.danube[600],
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  range: {
    flexDirection: 'row',
    columnGap: 20,
    rowGap: 20,
    flexWrap: 'wrap',
  },
});
