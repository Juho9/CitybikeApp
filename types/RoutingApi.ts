
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

export type NearestResponse = {
    data: {
        nearest: {
            edges: Node[]
        }  
    }
}


export type Node = {
    node: {
        place: NearestRentalStation
        distance: number
    } 
}


export type NearestRentalStation = {  
    stationId: string
    name: string
    bikesAvailable: number
    spacesAvailable: number
    capacity: number
    state: string
}