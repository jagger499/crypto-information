import {StyleSheet} from 'react-native';
import {themes} from '../../config/themes';

export const styles = StyleSheet.create({
  up: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    backgroundColor: themes.colors.danube[900],
  },
});
