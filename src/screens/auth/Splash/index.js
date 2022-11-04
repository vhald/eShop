import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Splash = () => {
  return (
    <View>
      <Text>This is a splash screen</Text>
      <Image source={require('../../../assets/images')} style={styles.splash} />
    </View>
  );
};

export default Splash;
