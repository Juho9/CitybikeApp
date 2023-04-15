import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import { BikeRentalStation, NearestRentalStation, NearestResponse, Node } from '../types/RoutingApi';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchNearestStations, getBikeStationsDataToList } from '../utils/FetchBikes';



const HomeScreen = () => {

  //Test location for nearest stations
  
  const lat: number = 60.182046
  const lon: number = 24.975506
  
  
  const [nearestStations, setNearestStations] = React.useState<Node[]>([])
  
  React.useEffect(() => {
    //Get nearest stations
    async function FetchStations() {
      const results = await fetchNearestStations(lat, lon)
      setNearestStations(results.data.nearest.edges)
    }
    FetchStations()
  }, )


  const renderItem = ({ item }: { item: Node }) => (
    <View style={styles.renderItem}>
      
        <View style={{ flex: 3, alignSelf: 'center', marginLeft: 28, }}>
          <Ionicons name="bicycle" size={45} />
        </View>
        <View style={{flex: 8, padding: 20, marginLeft: 10}}>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 28, width: '100%'}}>{item.node.place.name}</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 18}}>Available bikes: {item.node.place.bikesAvailable}</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 18}}>Available spaces: {item.node.place.spacesAvailable}</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 18}}>{item.node.distance} metres</Text>
        </View>
        

    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>CitybikesApp</Text>
      </View>
      <View style={styles.rest}>
        <TouchableOpacity onPress={() => console.log(nearestStations)}>
            <Ionicons name="trash" size={26} />
        </TouchableOpacity>
        <FlatList data={nearestStations} renderItem={renderItem} keyExtractor={(item) => item.node.place.stationId} ></FlatList>
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
    width: '100%',
    alignItems: 'center',
  },
  renderItem: {
    backgroundColor: '#E6E6FA',
    width: 350,
    flexDirection: 'row',
    marginTop: '5%',
    borderRadius: 15,
    alignSelf: 'center',
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

