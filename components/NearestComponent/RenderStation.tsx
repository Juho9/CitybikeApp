import { View, Text } from 'react-native';
import { Node } from '../../types/RoutingApi';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const RenderStation = ({ item }: { item: Node }) => (
  <View style={styles.renderItem}>
    <View style={{ flex: 3, alignSelf: 'center', marginLeft: 28 }}>
      <Ionicons name="bicycle" size={45} />
    </View>
    <View style={{ flex: 8, padding: 20, marginLeft: 10 }}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={{ fontSize: 28, width: '100%' }}
      >
        {item.node.place.name}
      </Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={{ fontSize: 18 }}
      >
        Available bikes: {item.node.place.bikesAvailable}
      </Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={{ fontSize: 18 }}
      >
        Available spaces: {item.node.place.spacesAvailable}
      </Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={{ fontSize: 18 }}
      >
        {item.node.distance} metres
      </Text>
    </View>
  </View>
);
