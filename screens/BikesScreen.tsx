import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapComponent from '../components/MapComponent';

const BikesScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Check out bikes near you?</Text>
      </View>
      <View style={styles.map}>
        <MapComponent />
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
  map: {
    flex: 5,
    height: '100%',
    width: '100%',
    borderWidth: 1,
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
});

export default BikesScreen;

