import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = prop => {
  // const name = prop.name;

  const clicked = () => {
    console.log('button clicked');
  };

  return (
    <TouchableOpacity onPress={clicked} styles={styles.button1}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
