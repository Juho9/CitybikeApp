import * as Location from 'expo-location';
import { LocationResponse } from '../types/RoutingApi';

/* Async function that asks permission to get devices location data and returns it as LocationResponse */
export default async function useLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  }

  let location: LocationResponse = await Location.getCurrentPositionAsync({});
  console.log(location);
  return location;
}
