import React, {useContext} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {Tickers} from '../../types';
import {commonStyles} from '../../styles/commonStyles';
import {isStringNegative} from '../../utils';
import {TickersContext} from '../../context/context';
import {rangeToKey} from '../../utils/rangeToKey';

/**
 * Componente para mostrar un elemento de lista de tickers.
 *
 * @param item - Información del ticker que se mostrará.
 * @param setDetailModal - Función para abrir el modal de detalles.
 */
export const TickerListItem = ({
  item,
  setDetailModal,
}: {
  item: Tickers;
  setDetailModal: ({open, detail}: {open: boolean; detail?: Tickers}) => void;
}) => {
  const {changeRange} = useContext(TickersContext);

  return (
    <Pressable
      testID="item-list-component"
      onPress={() => setDetailModal({open: true, detail: item})}
      style={styles.tickerContainer}>
      <View style={commonStyles.rowRank}>
        <Text style={[commonStyles.txt]}>{`${item.rank}`}</Text>
      </View>
      <View style={commonStyles.rowFirst}>
        <View style={styles.symbol}>
          <Text style={styles.symbolText}>{`${item.symbol}`}</Text>
        </View>
        <View style={styles.priceUsd}>
          <Text style={[commonStyles.txt]}>{`${item.price_usd}`}</Text>
        </View>
      </View>
      <View style={commonStyles.rowSecond}>
        <Text style={[commonStyles.txt]}>{`${item.price_btc}`}</Text>
      </View>
      <View style={commonStyles.rowThird}>
        <Text
          style={[
            commonStyles.txt,
            isStringNegative(item[rangeToKey(changeRange)])
              ? commonStyles.txt_red
              : commonStyles.txt_green,
          ]}>{`${item[rangeToKey(changeRange)]}%`}</Text>
      </View>
    </Pressable>
  );
};
