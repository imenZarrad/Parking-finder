import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileFill from "./Screens/ProfileFill.js";
import MarkerDetail from "./Screens/MarkerDetail";
import SearchFilter from "./Screens/SearchFilter";
import HestoryParking from "./Screens/hertoryParking.js";
import Map from "./Screens/map/Map";
import ParkingDetail from "./Screens/ParkingDetail/ParkingDetail";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="HestoryParking" component={HestoryParking} />
      <Stack.Screen name="ProfileFill" component={ProfileFill} />
      <Stack.Screen name="MarkerDetail" component={MarkerDetail} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
    </Stack.Navigator>
  );
};

export default StackNav;
