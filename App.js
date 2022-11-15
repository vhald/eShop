import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Splash from './src/screens/auth/Splash';
import Login from './src/screens/auth/Login';

const App = () => {
  return (
    <SafeAreaView>
      <Splash />
      {/* <Login /> */}
    </SafeAreaView>
  );
};

export default App;
