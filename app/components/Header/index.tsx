import React, {useContext} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import ExpandMore from '../../assets/expand_more.svg';
import ExpandLess from '../../assets/expand_less.svg';
import {TickersContext, filters} from '../../context/context';
import {FILTER_CHANGE, FILTER_TOP} from '../FilterModal';

/**
 * Header Component
 *
 * This component represents the application header and displays information
 * about filters and sorting options.
 *
 * @param props.showFilters - Function that is executed when clicking on the filters section.
 */
export const Header = ({showFilters}: {showFilters: () => void}) => {
  const {reverse, filter, rankRange, changeRange, handlePressFilter} =
    useContext(TickersContext);

  const ReverseIcon = reverse ? ExpandLess : ExpandMore;

  return (
    <View testID="header" style={styles.header}>
      <View style={styles.section}>
        <Text style={commonStyles.txt_title}>ONE MILLION UP</Text>
      </View>
      <Pressable
        testID="select-filter-column-header"
        onPress={showFilters}
        style={styles.section}>
        <Text style={commonStyles.txt}>Selected filters:</Text>
        <View style={styles.filter}>
          <Text style={commonStyles.txt}>
            {FILTER_TOP?.[`${rankRange}`].label}
          </Text>
        </View>
        <View style={styles.filter}>
          <Text style={commonStyles.txt}>
            {FILTER_CHANGE?.[`${changeRange || 0}`].label}
          </Text>
        </View>
      </Pressable>
      <View style={styles.section}>
        <Pressable
          testID="rank-column-header"
          onPress={() => handlePressFilter({pressFilter: filters.rank})}
          style={commonStyles.rowRank}>
          <View style={styles.more}>
            <Text style={commonStyles.txt}>#</Text>
            {filter === filters.rank && <ReverseIcon />}
          </View>
        </Pressable>
        <Pressable
          testID="price-usd-column-header"
          onPress={() => handlePressFilter({pressFilter: filters.priceUSD})}
          style={commonStyles.rowFirst}>
          <View style={styles.more}>
            <Text style={commonStyles.txt}>Price (USD)</Text>
            {filter === filters.priceUSD && <ReverseIcon />}
          </View>
        </Pressable>
        <Pressable
          testID="price-btc-column-header"
          onPress={() => handlePressFilter({pressFilter: filters.priceBTC})}
          style={commonStyles.rowSecond}>
          <View style={styles.more}>
            {filter === filters.priceBTC && <ReverseIcon />}
            <Text style={commonStyles.txt}>Price (BTC)</Text>
          </View>
        </Pressable>
        <Pressable
          testID="change-column-header"
          onPress={() => handlePressFilter({pressFilter: filters.change})}
          style={commonStyles.rowThird}>
          <View style={styles.more}>
            {filter === filters.change && <ReverseIcon />}
            <Text style={commonStyles.txt}>
              {FILTER_CHANGE?.[`${changeRange || 0}`].label}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
