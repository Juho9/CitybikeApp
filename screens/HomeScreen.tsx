import React from 'react';
import { View, Text } from 'react-native';
import ScreenStyles from './ScreenStyles';
import NearestComponent from '../components/NearestComponent';

const HomeScreen = () => {
  return (
    <View style={ScreenStyles.container}>
      <View style={ScreenStyles.titleView}>
        <Text style={ScreenStyles.title}>Home</Text>
      </View>
      <View style={ScreenStyles.rest}>
        <NearestComponent />
      </View>
    </View>
  );
};

export default HomeScreen;
