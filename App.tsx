import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen';
import BikesScreen from './screens/BikesScreen';
import StationsScreen from './screens/StationsScreen';


type RootTabParamList = {
  Home: undefined;
  Detail: { itemId: number };
};

const Tab = createMaterialBottomTabNavigator();

const App = () => {

  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        barStyle={{backgroundColor: '#E6E6FA', }}
        
      >
        <Tab.Screen name="Bikes" component={BikesScreen} 
          options={{
            tabBarLabel: 'Bikes',
            tabBarColor: '#E6E6FA',
            tabBarIcon: ({ color }) => <Text style={{ color }}>
              <Ionicons name="bicycle" size={26} color={color} />
            </Text>,
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Text style={{ color }}>
              <Ionicons name="ios-home" size={24} color={color} />
            </Text>,
          }}
        />
        <Tab.Screen name="Stations" component={StationsScreen} 
          options={{
            tabBarLabel: 'Stations',
            tabBarIcon: ({ color }) => <Text style={{ color }}>
              <Ionicons name="stats-chart" size={24} color={color} />
            </Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;