import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  map: {
    flex: 1,
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  marker: {
    backgroundColor: '#E6E6FA',
  },
  callout: {
    alignSelf: 'flex-start',
  },
});
