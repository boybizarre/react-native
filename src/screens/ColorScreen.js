import { View, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title='Add a color'
        onPress={() => {
          setColors((colors) => [...colors, randomRgb()]);
        }}
      />
      <FlatList
        // using the color as a unique ID
        keyExtractor={(color) => color}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green} ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
