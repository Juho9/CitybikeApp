import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';
import { Node } from '../../types/RoutingApi';
import { RenderStation } from './RenderStation';
import { ActivityIndicator } from 'react-native-paper';
import UseLocation from '../../utils/UseLocation';
import { FetchNearestStations } from '../../utils/FetchNearestStations';

export const StationsViewComponent = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [nearestStations, setNearestStations] = React.useState<Node[]>([]);
  const [loading, setLoading] = React.useState(true);

  //Gets devices location and fetches closest 3 stations based on the coordinates
  React.useEffect(() => {
    async function FetchStations() {
      const location = await UseLocation();
      const results = await FetchNearestStations(
        location!.coords.latitude,
        location!.coords.longitude
      );
      setNearestStations(results.data.nearest.edges);
      setLoading(false);
    }

    FetchStations();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      async function NewData() {
        const location = await UseLocation();
        const results = await FetchNearestStations(
          location!.coords.latitude,
          location!.coords.longitude
        );
        setNearestStations(results.data.nearest.edges);
        setRefreshing(false);
      }

      NewData();
    }, 1500);
  };

  return (
    <>
      <View style={styles.renderItemView}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          style={{
            fontSize: 28,
            width: '80%',
            alignSelf: 'center',
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          Nearest to you...
        </Text>
        <FlatList
          data={nearestStations}
          renderItem={RenderStation}
          keyExtractor={(item) => item.node.place.stationId}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        ></FlatList>
      </View>
    </>
  );
};
