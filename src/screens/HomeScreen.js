import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi There! My name is Jamal!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go to components Demo'
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('ListScreen')}>
        <View>
          <Text>Go to list Demo</Text>
          <Text>Go to list Demo</Text>
          <Text>Go to list Demo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
