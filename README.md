# Helsinki City Bike App
### Expo
Link to Expo (not up to date):

https://expo.dev/accounts/juho9/projects/CityBike-App

## Project overview
This is a **React Native TypeScript app** created for a mobile development course. The app leverages the **Routing API** provided by Digitransit to display detailed information about city bike stations in the Helsinki metropolitan area.

Users can view bike station data, including their location, current status, available bikes, and free spaces, in both map and list views. The app also integrates the user's current location to display nearby bike stations.

---

## Used technologies
### **Routing API**
The app uses the **Digitransit Routing API** to fetch city bike station data via **GraphQL**. It provides:
- Station names and locations.
- Current status, including the number of available bikes and free spaces.

### **Expo Location**
The app utilizes the **Expo Location package** to access the user's geolocation data. This enables the app to:
- Determine the user's current location.
- Display the closest bike stations in both map and list views.

### **React Native Maps**
**React Native Maps** is used to create the map view for the app. Key components include:
- `MapView`: Displays the map.
- `Marker`: Pinpoints the locations of bike stations.
- `Callout`: Provides detailed information about each station when a marker is tapped.

### **React Navigation**
The app uses **React Navigation** and **Material Bottom Tabs** for smooth screen transitions and navigation.

---
