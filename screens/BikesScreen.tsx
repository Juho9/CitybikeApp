import React from 'react';
import { View, Text } from 'react-native';
import ScreenStyles from './ScreenStyles';
import MapComponent from '../components/MapComponent';

const BikesScreen: React.FC = () => {
  return (
    <View style={ScreenStyles.container}>
      <View style={ScreenStyles.titleView}>
        <Text style={ScreenStyles.title}>Check out bikes near you?</Text>
      </View>
      <View style={ScreenStyles.map}>
        <MapComponent />
      </View>
    </View>
  );
};

export default BikesScreen;
