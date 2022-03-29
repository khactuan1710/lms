import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { ThemeProvider, lightTheme } from './src/resources/theme';

import RootNavigator from './src/navigation';
import store from './src/store';

const persistor = persistStore(store);

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider type={lightTheme}>
          <RootNavigator />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;