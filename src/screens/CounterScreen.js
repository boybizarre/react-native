import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const COUNT_INCREASE = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return state.count - action.payload < 0
        ? state
        : { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase', payload: COUNT_INCREASE });
          console.log(state.count);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease', payload: COUNT_INCREASE });
          console.log(state.count);
        }}
      />
      <Text>This is the Counter Screen</Text>
      <Text>Current counter: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
