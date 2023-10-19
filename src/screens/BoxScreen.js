import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.boxOneStyle}>Child #1</Text>
      <Text style={styles.boxTwoStyle}>Child #2</Text>
      <Text style={styles.boxThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 100,
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  boxTwoStyle: {
    height: 50,
    width: 50,
    // marginTop: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
  },
  boxThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  // viewStyle: {
  //   borderWidth: 3,
  //   borderColor: 'black',
  //   height: 200,
  //   // flexDirection: 'row',
  //   // alignItems: 'center', //'flex-start', 'flex-end', 'center'
  //   // justifyContent: 'space-around', // normal css values
  //   // paddingVertical: 20,
  //   // alignItems: 'flex-end',
  // },

  // textOneStyle: {
  //   borderWidth: 2,
  //   borderColor: 'red',
  //   // flex: 1,
  // },
  // textTwoStyle: {
  //   borderWidth: 2,
  //   borderColor: 'red',
  //   fontSize: 18,
  //   ...StyleSheet.absoluteFillObject,
  //   // left: 0,
  //   // right: 0,
  //   // top: 0,
  //   // bottom: 0,
  //   // position: 'absolute',
  //   // alignSelf: 'flex-end',
  //   // flex: 1,
  // },
  // textThreeStyle: {
  //   borderWidth: 2,
  //   borderColor: 'red',
  //   // alignSelf: 'stretch',
  //   // flex: 1,
  // },
});

export default BoxScreen;
