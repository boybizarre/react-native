import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  // const friends = [
  //   { name: 'Friend 1', key: '1' },
  //   { name: 'Friend 2', key: '2' },
  //   { name: 'Friend 3', key: '3' },
  //   { name: 'Friend 4', key: '4' },
  //   { name: 'Friend 5', key: '5' },
  //   { name: 'Friend 6', key: '6' },
  //   { name: 'Friend 7', key: '7' },
  //   { name: 'Friend 8', key: '8' },
  //   { name: 'Friend 9', key: '9' },
  // ];

  const friends = [
    { name: 'Friend 1', age: 31 },
    { name: 'Friend 2', age: 20 },
    { name: 'Friend 3', age: 23 },
    { name: 'Friend 4', age: 25 },
    { name: 'Friend 5', age: 40 },
    { name: 'Friend 6', age: 39 },
    { name: 'Friend 7', age: 34 },
    { name: 'Friend 8', age: 21 },
    { name: 'Friend 9', age: 35 },
  ];
  return (
    <View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.age}
        data={friends}
        renderItem={({ item }) => {
          // console.log(element) // { item: { name: friend }, index }
          return (
            <Text style={styles.textStyle}>
              {item.name} - {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;
