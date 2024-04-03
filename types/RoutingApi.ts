//Type for response from Digitransit Routing API where we fetch all stations
export type RoutingResponse = {
  data: {
    bikeRentalStations: BikeRentalStation[];
  };
};

//Type for station in response
export type BikeRentalStation = {
  name: string;
  stationId: string;
  capacity: number;
  bikesAvailable: number;
  spacesAvailable: number;
  state: string;
  lon: number;
  lat: number;
};

//Type for response from Digitransit where we fetch nearest stations based of our coordinates
export type NearestResponse = {
  data: {
    nearest: {
      edges: Node[];
    };
  };
};

export type Node = {
  node: {
    place: NearestRentalStation;
    distance: number;
  };
};

//Type for bikestation
export type NearestRentalStation = {
  stationId: string;
  name: string;
  bikesAvailable: number;
  spacesAvailable: number;
  capacity: number;
  state: string;
};

//Type for 'expo-locations' response body
export type LocationResponse = {
  coords: {
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  mocked?: boolean;
  timestamp: number;
};
