import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { FetchBikes } from '../utils/FetchBikes';

const HomeScreen = () => {
  const handlePress = () => {
    // Navigation logic for going to the next screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>CitybikesApp</Text>
      </View>
      <View style={styles.rest}>
        <Button title="Test" onPress={() => console.log("jes")}/>
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
    flex: 6,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

