import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  return (
    <View>
      <Text>This is the ImageScreen!</Text>
      <ImageDetail score={2} imageSource={require('../../assets/forest.jpg')} title='Forest' />
      <ImageDetail score={4} imageSource={require('../../assets/beach.jpg')} title='Beach'/>
      <ImageDetail score={6} imageSource={require('../../assets/mountain.jpg')} title='Mountain'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
