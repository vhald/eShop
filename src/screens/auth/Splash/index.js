import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>This is a splash screen</Text>
      <Image
        resizeMode="contain"
        source={require('../../../assets/images/splash.png')}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" />

      <TouchableOpacity hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
