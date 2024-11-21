import { RoutingResponse } from '../types/RoutingApi';
import { API_KEY } from '@env';

//Fetch all bikestations
const FetchBikes = async (): Promise<RoutingResponse> => {
  let response = await fetch(
    'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'digitransit-subscription-key': API_KEY,
      },
      body: `{
            bikeRentalStations {
                name
                stationId
                bikesAvailable
                spacesAvailable
                capacity
                state
                lon
                lat
              }
            }`,
    }
  );

  let data: RoutingResponse = await response.json();

  return data;
};

export { FetchBikes };
