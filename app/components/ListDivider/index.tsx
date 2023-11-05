import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';

/**
 * Componente ListDivider
 *
 * Este componente representa un divisor visual utilizado para separar elementos en una lista.
 *
 * @remarks
 * Este componente se utiliza para crear una línea divisoria en una lista o en una visual.
 *
 * @returns Un elemento de vista (View) que actúa como divisor visual.
 */
export const ListDivider = () => {
  return <View style={styles.divider} />;
};
