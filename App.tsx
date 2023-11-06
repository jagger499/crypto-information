import React from 'react';
import {SafeAreaView} from 'react-native';

import {Home} from './app/screens/Home';
import {TickersProvider} from './app/context';

/**
 * Main application component.
 * This component is the root of the application and is responsible for providing the context
 * of the "tickers" to all the components hierarchy below it.
 *
 * @returns The root element of the application that includes the "tickers" provider and the "Home" component.
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
