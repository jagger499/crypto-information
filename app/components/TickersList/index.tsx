import React, {useRef} from 'react';
import {Tickers} from '../../types';
import {Animated} from 'react-native';
import {TickerListItem} from '../TickerListItem';
import {themes} from '../../config/themes';
import {ITEM_SIZE} from '../TickerListItem/styles';

/**
 * Componente TickerList
 *
 * Este componente muestra una lista de tickers en una FlatList animada.
 *
 * @param props - Las propiedades del componente.
 * @param props.tickers - Un array de objetos Tickers que se mostrarán en la lista.
 * @param props.setDetailModal - Una función que permite abrir un modal de detalles para un ticker.
 */
export const TickerList = ({
  tickers,
  setDetailModal,
}: {
  tickers: Tickers[];
  setDetailModal: ({open, detail}: {open: boolean; detail?: Tickers}) => void;
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={tickers}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      keyExtractor={item => item.id}
      maxToRenderPerBatch={9}
      style={{height: themes.sizes.VIEW_HEIGHT}}
      renderItem={({item, index}) => {
        const inputOpacityRange = [
          -1,
          0,
          (ITEM_SIZE + 32) * index,
          (ITEM_SIZE + 32) * (index + 0.6),
        ];
        const opacity = scrollY.interpolate({
          inputRange: inputOpacityRange,
          outputRange: [1, 1, 1, 0],
        });
        return (
          <Animated.View style={{opacity}}>
            <TickerListItem setDetailModal={setDetailModal} item={item} />
          </Animated.View>
        );
      }}
    />
  );
};
