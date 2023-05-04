import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Node } from '../types/RoutingApi';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchNearestStations } from '../utils/FetchBikes';
import { ActivityIndicator } from 'react-native-paper';
import useLocation from '../utils/UseLocation';


const NearestComponent= () => {
  
  const [nearestStations, setNearestStations] = React.useState<Node[]>([])
  const [loading, setLoading] = React.useState(true)
    

  React.useEffect(() => {
    async function FetchStations(){
    const location = await useLocation()
    const results = await fetchNearestStations(location!.coords.latitude, location!.coords.longitude)
    setNearestStations(results.data.nearest.edges)
    setLoading(false)
  }
  
  FetchStations()
  }, [])
  


  if (loading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} />
      </View>
    )
  }

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
      <View style={styles.renderItemView}>
        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 28, width: '80%', alignSelf: 'center', paddingTop: 30, paddingBottom: 30 }}>BikeStations closest to you...</Text>
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
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  renderItemView: {
    flex: 5,
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

export default NearestComponent;