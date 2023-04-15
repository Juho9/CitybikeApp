// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, push, ref, onValue } from 'firebase/database';
import { BikeRentalStation } from "../types/RoutingApi";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "ostoslistafirebase-1cb32.firebaseapp.com",
  databaseURL: "https://ostoslistafirebase-1cb32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ostoslistafirebase-1cb32",
  storageBucket: "ostoslistafirebase-1cb32.appspot.com",
  messagingSenderId: "454046456831",
  appId: "1:454046456831:web:3df1a9c5a98fa4cf0aa5ca",
  measurementId: "G-T3N6VEKFH6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app)

export const [favourites, setFavourites] = React.useState<BikeRentalStation[]>([])

export const addFavourite = (station: BikeRentalStation) => {
  push(
    ref(database, 'favourites/'),
    { 
      'name': station.name,
      'stationId': station.stationId,
      'capacity': station.capacity,
      'bikesAvailable': station.bikesAvailable,
      'spacesAvailable': station.spacesAvailable,
      'state': station.state,
      'lon': station.lon,
      'lat': station.lat
    }
  )
}

export const getFavouriteStations = () => {
  const itemsRef = ref(database, 'favourites/')
  onValue(itemsRef, (snapshot) => {
    const data = snapshot.val()
    setFavourites(Object.values(data))
  })
}

export default {app, database, favourites, addFavourite, getFavouriteStations}