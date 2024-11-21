import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import BikesScreen from './screens/BikesScreen';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  //Navigation for app
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        barStyle={{ backgroundColor: '#E6E6FA' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Text style={{ color }}>
                <Ionicons name="home-outline" size={24} color={color} />
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Bikes"
          component={BikesScreen}
          options={{
            tabBarLabel: 'Bikes',
            tabBarColor: '#E6E6FA',
            tabBarIcon: ({ color }) => (
              <Text style={{ color }}>
                <Ionicons name="bicycle" size={26} color={color} />
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
