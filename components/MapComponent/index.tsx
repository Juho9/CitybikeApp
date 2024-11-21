import React, { useRef } from 'react';
import { View } from 'react-native';
import { BikeRentalStation } from '../../types/RoutingApi';
import { FetchBikes } from '../../utils/FetchBikes';
import UseLocation from '../../utils/UseLocation';
import { ActivityIndicator } from 'react-native-paper';
import { MapViewComponent } from './MapViewComponent';
import { styles } from './styles';

/* Return Mapview component that renders all fetched stations to markers */
const MapComponent: React.FC = () => {
  const [location, setLocation] = React.useState({
    lat: 60.182046,
    lng: 24.975506,
  });

  const [stations, setStations] = React.useState<BikeRentalStation[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function GetInitialData() {
      const location = await UseLocation();
      setLocation({
        lat: location!.coords.latitude,
        lng: location!.coords.longitude,
      });
      const results = await FetchBikes();
      setStations(results.data.bikeRentalStations);
      setLoading(false);
    }
    GetInitialData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  //Returns mapview component and stations as markers
  return (
    <View style={styles.container}>
      <MapViewComponent stations={stations} location={location} />
    </View>
  );
};

export default MapComponent;
