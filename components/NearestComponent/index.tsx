import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { StationsViewComponent } from './StationsViewComponent';

const NearestComponent = () => {
  return (
    <View style={styles.container}>
      <StationsViewComponent />
    </View>
  );
};

export default NearestComponent;
