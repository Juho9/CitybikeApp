import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import { BikeRentalStation } from '../types/RoutingApi';
import { FetchBikes } from '../utils/FetchBikes';
import LottieView from 'lottie-react-native';
import InfoComponent from '../components/InfoComponent';


const StationsScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Stations</Text>
      </View>
      <View style={styles.rest}>
        <InfoComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: 3,
  },
  titleView: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    width: '100%',
    alignItems: 'center',
  },
  rest: {
    flex: 5,
    borderWidth: 1,
    width: '100%',
    
  },
});

export default StationsScreen;

