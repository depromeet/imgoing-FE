import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from 'navigation/Navigator';
import { colors } from 'constant/index';
import { store } from 'modules/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  async function loadResource() {
    try {
      await Promise.all([
        SplashScreen.preventAutoHideAsync(),
        Font.loadAsync({
          NotoSansKR: require('assets/fonts/NotoSansKR-Regular.ttf'),
          Roboto: require('assets/fonts/Roboto-Regular.ttf'),
        }),
      ]);
    } catch (e) {
      console.warn(e);
    } finally {
      setIsReady(true);
    }
  }
  useEffect(() => {
    loadResource();
  }, []);

  if (!isReady) return null;

  return (
    <ThemeProvider theme={{ colors: colors }}>
      <Provider store={store}>
        <RootSiblingParent>
          <Navigator />
        </RootSiblingParent>
      </Provider>
    </ThemeProvider>
  );
}
