import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ title, score, imageSource}) => {
  // console.log(props);

  return (
    <View>
      <Image source={imageSource} />
      <Text>Show image of {title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
