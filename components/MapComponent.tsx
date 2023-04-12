import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Keyboard, TextInput, Button, TouchableWithoutFeedback, Image } from 'react-native';
import { BikeRentalStation } from '../types/RoutingApi';
import { FetchBikes } from '../utils/FetchBikes';




const MapComponent: React.FC = () => {

    
    const [location, setLocation] = React.useState({
        lat: 60.200692,
        lng: 24.934302,
      })

    const favourites: string[] = []
    const [stations, setStations] = React.useState<BikeRentalStation[]>([])

    React.useState(() => {
        async function FetchData() {
        const results = await FetchBikes()
        setStations(results.data.bikeRentalStations)
        }
        FetchData()
    }, )

    //Returns image based on the number of available bikes in station.
    const getImageForMarker = (value: number) => {
        if (value === 0) {
            return require('../assets/motorcycle-icon-red.png');
        } else {
            return require('../assets/motorcycle-icon.png')
        }
    }

    const addToFavourite = (stationId: string) => {
      favourites.push(stationId)
      console.log(favourites)
    }

    return (
        <View style={styles.container}>
          <MapView style={styles.map} 
          region={{latitude: location.lat, longitude: location.lng, latitudeDelta: 0.0122, longitudeDelta: 0.0121 }} 
          >
            {stations.map(m =>  (
                <Marker
                    key={m.stationId}
                    title={m.name}
                    coordinate={{
                        latitude: m.lat,
                        longitude: m.lon
                    }}
                    image={(getImageForMarker(m.bikesAvailable))}
                > 
                    
                    <Callout style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{}}>
                        <Text numberOfLines={1} style={{fontSize: 28, }}>{m.name}</Text>
                        <View style={{ alignItems: 'center' }}>
                          <Text numberOfLines={1} style={{fontSize: 15, }}>Bikes available: {m.bikesAvailable}</Text>
                          <Text numberOfLines={1} style={{fontSize: 15, }}>Total spaces: {m.capacity}</Text>
                          <Button title='Favourite' onPress={() => addToFavourite(m.stationId)} />
                        </View>
                      </View>
                    </Callout>
                </Marker>
            ))}
          </MapView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      map: {
        flex: 1,
        alignSelf: 'center',
        height: '100%',
        width: '100%',
      },
      marker: {
        backgroundColor: '#E6E6FA'
      },
      callout: {
        alignSelf: 'flex-start',

      }
    });

export default MapComponent;
