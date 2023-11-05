import React, {useContext, useState} from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import {styles} from './styles';
import {ListDivider} from '../ListDivider';
import {height} from '../../config/themes';
import {TickersContext, filters} from '../../context/context';

export const FILTER_TOP = [
  {label: 'Top     1 - 100', value: 0},
  {label: 'Top 101 - 200', value: 1},
  {label: 'Top 201 - 300', value: 2},
  {label: 'Top 301 - 400', value: 3},
  {label: 'Top 401 - 500', value: 4},
];

export const FILTER_CHANGE = [
  {label: '  7d', value: 0},
  {label: '24h', value: 1},
  {label: '  1h', value: 2},
];

/**
 * Componente que muestra un modal de filtros para seleccionar rangos de clasificación y cambio.
 *
 * @param modalVisible - Indica si el modal es visible.
 * @param setModalVisible - Función para establecer la visibilidad del modal.
 */
export const FilterModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (param: boolean) => void;
}) => {
  const {fetchTickersDataPage, handlePressFilter, rankRange, changeRange} =
    useContext(TickersContext);

  const [topFilter, setTopFilter] = useState(rankRange);
  const [changeFilter, setChangeFilter] = useState(changeRange);

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <ScrollView
        style={[{height}, commonStyles.container]}
        contentContainerStyle={[commonStyles.container, styles.container]}>
        <Text style={commonStyles.txt_title}>Filters</Text>
        <ListDivider />
        <Text style={commonStyles.txt_title}>Selected rank range</Text>
        <View style={styles.range}>
          {FILTER_TOP.map(({label, value}) => (
            <Pressable
              onPress={() => setTopFilter(value)}
              key={`${label}`}
              style={[
                styles.filter,
                value === topFilter ? styles.filterSelected : {},
              ]}>
              <Text style={commonStyles.txt}>{label}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={commonStyles.txt_title}>Selected Range</Text>
        <View style={styles.range}>
          {FILTER_CHANGE.map(({label, value}) => (
            <Pressable
              onPress={() => setChangeFilter(value)}
              key={`${label}`}
              style={[
                styles.filter,
                value === changeFilter ? styles.filterSelected : {},
              ]}>
              <Text style={commonStyles.txt}>{label}</Text>
            </Pressable>
          ))}
        </View>
        <ListDivider />
        <Pressable
          onPress={async () => {
            fetchTickersDataPage({page: topFilter, change: changeFilter});
            await handlePressFilter({pressFilter: filters.rank});
            setModalVisible(false);
          }}
          style={styles.button}>
          <Text style={commonStyles.txt}>Aplicar</Text>
        </Pressable>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.buttonSecondary}>
          <Text style={commonStyles.txt}>Cancelar</Text>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};
