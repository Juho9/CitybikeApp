import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Keyboard, TextInput, Button, TouchableWithoutFeedback, Image } from 'react-native';
import { BikeRentalStation } from '../types/RoutingApi';
import { FetchBikes } from '../utils/FetchBikes';


const MapComponent: React.FC = () => {


    const [location, setLocation] = React.useState({
        lat: 60.200692,
        lng: 24.934302,
      })

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

    return (
        <View style={styles.container}>
          <MapView style={styles.map} 
          region={{latitude: location.lat, longitude: location.lng, latitudeDelta: 0.0322, longitudeDelta: 0.0221 }} 
          >
            {stations.map(m => (
                <Marker
                    key={m.stationId}
                    title={m.name}
                    coordinate={{
                        latitude: m.lat,
                        longitude: m.lon
                    }}
                    description={'Bikes available: ' + m.bikesAvailable}
                >
                    <Image source={getImageForMarker(m.bikesAvailable)} style={{height: 35, width:35 }} />
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
    });

export default MapComponent;
