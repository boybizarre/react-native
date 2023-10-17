import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  // const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Hi There! My name is Jamal!</Text>
      <Button
        onPress={() => navigation.navigate('ComponentsScreen')}
        title='Go to components Demo'
      />
      <Button
        onPress={() => navigation.navigate('ListScreen')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title='Go to ImageScreen'
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate('ListScreen')}>
        <View>
          <Text>Go to list Demo</Text>
          <Text>Go to list Demo</Text>
          <Text>Go to list Demo</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
