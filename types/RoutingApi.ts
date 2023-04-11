
//Type for response from Digitransit Routing API
export type RoutingResponse = {
    data: {
        bikeRentalStations: BikeRentalStation[]
    }
} 

//Type for station in response
export type BikeRentalStation = {
    name: string
    stationId: string
    capacity: number
    bikesAvailable: number
    spacesAvailable: number
    state: string
    lon: number
    lat: number
}