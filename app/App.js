import {LogBox, Text} from 'react-native';
import React from 'react';
import AppNavigation from './navigations/AppNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Handling the device size
if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log console
  return (
    <GestureHandlerRootView>
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
