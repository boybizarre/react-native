import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  // console.log(useState);

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          setCounter((prev) => ++prev);
          console.log(counter);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter((prev) => --prev);
          console.log(counter);
        }}
      />
      <Text>This is the Counter Screen</Text>
      <Text>Current counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
