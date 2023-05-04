import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NearestComponent from '../components/NearestComponent';



const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Home</Text>
      </View>
        
      <View style={styles.rest}>
        <NearestComponent />
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
    alignItems: 'center',
  },
  renderItem: {
    backgroundColor: '#E6E6FA',
    width: 320,
    flexDirection: 'row',
    marginTop: '5%',
    borderRadius: 15,
    alignSelf: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 1,
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

