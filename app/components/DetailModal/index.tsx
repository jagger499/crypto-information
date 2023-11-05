import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import {styles} from './styles';
import {height, themes} from '../../config/themes';
import {isStringNegative} from '../../utils';
import {useTickersMarket} from '../../hooks/useTickersMarket';
import {ListDivider} from '../ListDivider';
import {Tickers} from '../../types';
import Close from '../../assets/close.svg';

/**
 * Componente para mostrar un modal de detalles de un ticker.
 *
 * @param modalVisible - Indica si el modal está visible y los detalles del ticker.
 * @param setModalVisible - Función para actualizar la visibilidad del modal y los detalles del ticker.
 */
export const DetailModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: {open: boolean; detail: Tickers};
  setModalVisible: ({open, detail}: {open: boolean; detail?: Tickers}) => void;
}) => {
  const {open, detail} = modalVisible;
  const {
    id,
    symbol,
    name,
    rank,
    price_usd,
    percent_change_24h,
    percent_change_1h,
    percent_change_7d,
    price_btc,
  } = detail;
  const {loading, markets, fetchTickerMarketsData} = useTickersMarket({id});

  useEffect(() => {
    fetchTickerMarketsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Modal transparent={true} animationType="slide" visible={open}>
      <View style={[styles.row, styles.header]}>
        <Text style={commonStyles.txt_subtitle}>{symbol}</Text>
        <View style={[styles.row, styles.title]}>
          <Text style={commonStyles.txt_subtitle}>{name}</Text>
          <View style={styles.rowColor}>
            <Text style={commonStyles.txt_subtitle}>{`#${rank}`}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => setModalVisible({open: false})}
          style={[styles.row, styles.close]}>
          <Close />
        </Pressable>
      </View>
      <ScrollView
        style={{height}}
        contentContainerStyle={[commonStyles.container, styles.container]}>
        <View style={styles.row}>
          <Text style={commonStyles.txt_subtitle}>Change</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>24 h</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>1 h</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>7 d</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>
              <Text
                style={[
                  commonStyles.txt,
                  isStringNegative(percent_change_24h)
                    ? commonStyles.txt_red
                    : commonStyles.txt_green,
                ]}>{`${percent_change_24h}`}</Text>
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                commonStyles.txt,
                isStringNegative(percent_change_1h)
                  ? commonStyles.txt_red
                  : commonStyles.txt_green,
              ]}>{`${percent_change_1h}`}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>
              <Text
                style={[
                  commonStyles.txt,
                  isStringNegative(percent_change_7d)
                    ? commonStyles.txt_red
                    : commonStyles.txt_green,
                ]}>{`${percent_change_7d}`}</Text>
            </Text>
          </View>
        </View>
        <ListDivider />
        <Text style={commonStyles.txt_subtitle}>Prices</Text>
        <View style={styles.row}>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>BTC</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>USD</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>{price_btc}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt}>{price_usd}</Text>
          </View>
        </View>
        <ListDivider />
        <Text style={commonStyles.txt_subtitle}>Markets</Text>
        <View style={styles.row}>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt_subtitle}>Name</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt_subtitle}>Base</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt_subtitle}>Quote</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={commonStyles.txt_subtitle}>(USD)</Text>
          </View>
        </View>
        {loading && (
          <ActivityIndicator color={themes.colors.danube[100]} size={'large'} />
        )}
        {!loading &&
          markets.map((market, index) => (
            <View
              key={`${market.name}-${market.time}-${market.volume}-${market.price_usd}-${index}`}
              style={styles.row}>
              <View style={styles.tableRow}>
                <Text style={commonStyles.txt}>{market.name}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={commonStyles.txt}>{`${market.base}`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={commonStyles.txt}>{`${market.quote}`}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={commonStyles.txt}>{`${market.price_usd}`}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </Modal>
  );
};
