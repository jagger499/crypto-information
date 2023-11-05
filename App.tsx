import React from 'react';
import {SafeAreaView} from 'react-native';

import {Home} from './app/screens/Home';
import {TickersProvider} from './app/context';

/**
 * Componente de la aplicación principal.
 * Este componente es la raíz de la aplicación y se encarga de proporcionar el contexto
 * de los "tickers" a toda la jerarquía de componentes debajo de él.
 *
 * @returns El elemento raíz de la aplicación que incluye el proveedor de "tickers" y el componente "Home".
 */
function App() {
  return (
    <TickersProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </TickersProvider>
  );
}

export default App;
