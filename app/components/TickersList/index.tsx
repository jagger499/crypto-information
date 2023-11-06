import React, {useRef} from 'react';
import {Tickers} from '../../types';
import {Animated, View} from 'react-native';
import {TickerListItem} from '../TickerListItem';
import {themes} from '../../config/themes';
import {ITEM_SIZE} from '../TickerListItem/styles';

/**
 * TickerList Component
 *
 * This component displays a list of tickers in an animated FlatList.
 *
 * @param props - Component properties.
 * @param props.tickers - An array of Ticker objects to be displayed in the list.
 * @param props.setDetailModal - A function that allows opening a details modal for a ticker.
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
    <View testID="list-component">
      <Animated.FlatList
        data={tickers}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
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
    </View>
  );
};
