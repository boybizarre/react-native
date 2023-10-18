import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const ColorCounterDetail = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounterDetail;
