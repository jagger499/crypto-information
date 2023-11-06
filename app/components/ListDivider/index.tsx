import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';

/**
 * ListDivider Component
 *
 * This component represents a visual divider used to separate items in a list.
 *
 * @remarks
 * This component is used to create a dividing line in a list or visual element.
 *
 * @returns A View element that serves as a visual divider.
 */
export const ListDivider = () => {
  return <View style={styles.divider} />;
};
