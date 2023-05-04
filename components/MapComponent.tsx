import React, { useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { BikeRentalStation } from '../types/RoutingApi';
import { FetchBikes } from '../utils/FetchBikes';
import LottieView from 'lottie-react-native';
import useLocation from '../utils/UseLocation';
import { ActivityIndicator } from 'react-native-paper';


const MapComponent: React.FC = () => {

    
    const [location, setLocation] = React.useState({
        lat: 60.182046,
        lng: 24.975506,
      })

    const [stations, setStations] = React.useState<BikeRentalStation[]>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function FetchData() {
          const location = await useLocation()
          setLocation({lat: location!.coords.latitude, lng: location!.coords.longitude})
          const results = await FetchBikes()
          setStations(results.data.bikeRentalStations)
          setLoading(false)
        }
        FetchData()
    }, [])

    //Animations
    const progress = useRef(new Animated.Value(0)).current
    
    const handleLikeAnimation = () => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start()
    }

    if (loading) {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
 
    //Returns image based on the number of available bikes in station.
    const getImageForMarker = (value: number) => {
        if (value === 0) {
            return require('../assets/motorcycle-icon-red.png');
        } else if (value <= 5) {
            return require('../assets/motorcycle-icon-orange.png')
        } else {
            return require('../assets/motorcycle-icon.png')
        }
    }


    return (
        <View style={styles.container}>
          <MapView style={styles.map} 
          region={{latitude: location.lat, longitude: location.lng, latitudeDelta: 0.0122, longitudeDelta: 0.0121 }} 
          showsUserLocation
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
                    description={m.bikesAvailable.toString()}
                > 
                    
                    <Callout tooltip >
                      <View style={{
                        justifyContent: 'center', alignItems: 'center', borderRadius: 30, 
                        backgroundColor: '#FFFFFF', position: 'relative', borderWidth: 1,
                        }}>
                        <Text numberOfLines={1} style={{fontSize: 28, padding: 20}}>{m.name}</Text>
                        <View style={{ alignItems: 'center' }}>
                          <Text numberOfLines={1} style={{fontSize: 18, paddingBottom: 15}}>Bikes: {m.bikesAvailable}/{m.capacity}</Text>
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
        zIndex: 0,
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
