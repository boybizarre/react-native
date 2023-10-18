import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounterDetail';

const SquareScreen = () => {
  const COLOR_INCREMENT = 15;

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);

  return (
    <View>
      <Text>SquareScreen</Text>

      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color='Red'
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />

      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green} ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
