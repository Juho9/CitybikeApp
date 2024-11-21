import { NearestResponse } from '../types/RoutingApi';
import { API_KEY } from '@env';

//Get 3 nearest bikestations based on current location
const FetchNearestStations = async (
  lat: number,
  lon: number
): Promise<NearestResponse> => {
  let response = await fetch(
    'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'digitransit-subscription-key': API_KEY,
      },
      body: `{
            nearest(lat: ${lat}, lon: ${lon}, maxResults: 3, maxDistance: 1500, filterByPlaceTypes: [BICYCLE_RENT]) {
                edges {
                  node {
                      place {
                       ... on BikeRentalStation {
                        stationId
                        name
                        bikesAvailable
                        spacesAvailable
                        capacity
                        state
                      } 
                    }
                    distance
                  }
                }
              }
            }`,
    }
  );

  let data: NearestResponse = await response.json();

  return data;
};

export { FetchNearestStations };
