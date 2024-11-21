import MapView, { Callout, Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { BikeRentalStation } from '../../types/RoutingApi';
import { styles } from './styles';
import { getImageForMarker } from './GetStationStatusIcon';

interface Props {
  stations: BikeRentalStation[];
  location: { lat: number; lng: number };
}

export const MapViewComponent = ({ stations, location }: Props) => {
  return (
    <>
      <MapView
        style={styles.map}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
      >
        {stations.map((station) => (
          <Marker
            key={station.stationId}
            title={station.name}
            coordinate={{
              latitude: station.lat,
              longitude: station.lon,
            }}
            image={getImageForMarker(station.bikesAvailable)}
            description={station.bikesAvailable.toString()}
          >
            <Callout tooltip>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  borderWidth: 1,
                }}
              >
                <Text numberOfLines={1} style={{ fontSize: 28, padding: 20 }}>
                  {station.name}
                </Text>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    numberOfLines={1}
                    style={{ fontSize: 18, paddingBottom: 15 }}
                  >
                    Bikes: {station.bikesAvailable}/{station.capacity}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </>
  );
};
