

import { RoutingResponse, BikeRentalStation } from "../types/RoutingApi"




let apiKey = process.env['API_KEY']

const FetchBikes = async (): Promise<RoutingResponse> =>{


    let response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/graphql', 'digitransit-subscription-key': apiKey! },
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

export { FetchBikes }