import React, {useContext, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {TickerList} from '../components/TickersList';
import {styles} from './styles';
import {Header} from '../components/Header';
import {themes} from '../config/themes';
import {commonStyles} from '../styles/commonStyles';
import {FilterModal} from '../components/FilterModal';
import {TickersContext} from '../context/context';
import {DetailModal} from '../components/DetailModal';
import {Tickers} from '../types';
import {DetailModalProp} from '../types/components/detailModal';

/**
 * Componente Home
 *
 * Este componente representa la página de inicio de la aplicación. Muestra una lista de tickers
 * y proporciona la funcionalidad de abrir un modal de filtro y un modal de detalles.
 *
 * @returns {JSX.Element} El componente de la página de inicio.
 */
export const Home = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [detailModal, setDetailModal] = useState<{
    open: boolean;
    detail?: Tickers | {};
  }>({
    open: false,
    detail: {},
  });
  const {loading, tickers, reverse} = useContext(TickersContext);

  const auxTikers = reverse ? [...tickers].reverse() : tickers;

  const modalOpen = filterModal || detailModal.open;

  return (
    <View testID="home-screen" style={styles.container}>
      <Header showFilters={() => setFilterModal(true)} />
      {loading && (
        <View
          testID="home-loading"
          style={[
            commonStyles.container,
            commonStyles.flex_center,
            styles.loading,
          ]}>
          <ActivityIndicator color={themes.colors.danube[100]} size={'large'} />
        </View>
      )}
      {!loading && !modalOpen && (
        <TickerList setDetailModal={setDetailModal} tickers={auxTikers} />
      )}
      {filterModal && (
        <FilterModal
          setModalVisible={setFilterModal}
          modalVisible={filterModal}
        />
      )}
      {detailModal.open && (
        <DetailModal
          modalVisible={detailModal as DetailModalProp}
          setModalVisible={setDetailModal}
        />
      )}
    </View>
  );
};
