


import { RoutingResponse, BikeRentalStation, NearestResponse } from "../types/RoutingApi"
import { API_KEY } from '@env';


//Fetch all bikestations
const FetchBikes = async (): Promise<RoutingResponse> =>{

    let response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/graphql', 'digitransit-subscription-key': API_KEY },
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
            }`
    })

    let data: RoutingResponse = await response.json();
    
    return data;
}


//Not in use
const FetchFavourites = async (stationId: string): Promise<BikeRentalStation> =>{

    let response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/graphql', 'digitransit-subscription-key': API_KEY },
        body: `{
            bikeRentalStations(id:${stationId}) {
                name
                stationId
                bikesAvailable
                spacesAvailable
                capacity
                state
                lon
                lat
              }
            }`
    })

    let data: RoutingResponse = await response.json();
    
    return data.data.bikeRentalStations[0];
}


//Not in use
const getBikeStationsDataToList = async (stationIds: string[]): Promise<BikeRentalStation[]> => {
    const dataList: BikeRentalStation[] = []
    if (stationIds.length > 0) {
      for (const id of stationIds) {
        const data = await FetchFavourites(id)
        dataList.push(data)
      }
    }
    return dataList
  }

  //Get 3 nearest bikestations based on current location
  const fetchNearestStations = async (lat: number, lon: number): Promise<NearestResponse> =>{

    let response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/graphql', 'digitransit-subscription-key': API_KEY },
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
            }`
    })

    let data: NearestResponse = await response.json();
    
    return data;
}

export { FetchBikes, getBikeStationsDataToList, fetchNearestStations }