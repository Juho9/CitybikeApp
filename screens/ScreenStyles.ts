import { StyleSheet } from 'react-native';

const ScreenStyles = StyleSheet.create({
  // Common Styles
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

  // HomeScreen specific styles
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

  // BikesScreen specific styles
  map: {
    flex: 5,
    height: '100%',
    width: '100%',
    borderWidth: 1,
  },
});

export default ScreenStyles;
