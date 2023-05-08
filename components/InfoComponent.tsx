import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BikeRentalStation } from '../types/RoutingApi';
import { FetchBikes } from '../utils/FetchBikes';


/* Some nice info about citybikestations in Pääkaupunkiseutu */
const InfoComponent = () => {

    const [stations, setStations] = React.useState<BikeRentalStation[]>([])
    const [loading, setLoading] = React.useState(true)
    var total: number = stations.length
    var totalAvailableBikes: number = 0
    var totalCapasity: number = 0
    var totalStationsOnline: number = 0


    //Hook for fetching all stations and setting stations to state
    React.useEffect(() => {
        async function FetchData() {
          const results = await FetchBikes()
          setStations(results.data.bikeRentalStations)
          setLoading(false)
        }
        FetchData()
    }, [])


    //Counts total amount of stations
    for (const station of stations) {
      totalAvailableBikes += station.bikesAvailable
      totalCapasity += station.capacity
      if (station.state === 'Station on') {
        totalStationsOnline += 1
      }
    }


  return (
      <View style={styles.infoView}>
        <View style={styles.info}>
          <Text numberOfLines={2} adjustsFontSizeToFit={true} style={{fontSize: 28, }}>Total stations</Text>
          <Text numberOfLines={2} adjustsFontSizeToFit={true} style={{fontSize: 28, paddingBottom: 20, fontWeight: 'bold'}}>{total}</Text>
          <Text numberOfLines={2} adjustsFontSizeToFit={true} style={{fontSize: 28}}>Available bikes</Text>
          <Text numberOfLines={2} adjustsFontSizeToFit={true} style={{fontSize: 28, paddingBottom: 20, fontWeight: 'bold'}}>{totalAvailableBikes}</Text>
          <Text numberOfLines={2} adjustsFontSizeToFit={true} style={{fontSize: 28}}>Room for</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 28, fontWeight: 'bold'}}>{totalCapasity} </Text>
          <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 28}}>bikes </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  statusInfo: {
    flex: 1,
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  info: {
    flex: 1,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 70,
    marginBottom: 70,
    backgroundColor: '#E6E6FA',
    padding: 35,
    borderRadius: 15,
  },
});

export default InfoComponent;

