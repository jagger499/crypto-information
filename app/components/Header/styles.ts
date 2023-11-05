import {StyleSheet} from 'react-native';
import {themes} from '../../config/themes';

export const styles = StyleSheet.create({
  header: {
    height: themes.sizes.HEADER_HEIGHT,
    backgroundColor: themes.colors.danube[800],
  },
  section: {
    height: themes.sizes.HEADER_HEIGHT / 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    columnGap: 5,
    backgroundColor: themes.colors.danube[800],
  },
  more: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  filter: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    marginLeft: 3,
    borderRadius: 10,
    backgroundColor: themes.colors.danube[900],
  },
});
