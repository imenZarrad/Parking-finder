import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Slide_2 from "./Screens/Logo/Slide_2/Slide_2";
import Slide_3 from "./Screens/Logo/Slide_3/Slide_3";
import Slide_1 from "./Screens/Logo/Slide_1/Slide_1";
import Let_s_In from "./Screens/Logo/Let_s_In/Let_s_In";
import Create_Account from "./Screens/Create_Account/Creat_Account";
import AfterWelcomeScreen from "./Screens/AfterWelcomeScreen/afterWelcomeScreen";
import ParkingDetail from "./Screens/ParkingDetail/ParkingDetail";

import  Map  from "./Screens/map/Map";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="ParkingMap" component={Map} />
        <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
        <Stack.Screen name="Slide_1" component={Slide_1} />
        <Stack.Screen name="Slide_2" component={Slide_2} />
        <Stack.Screen name="Slide_3" component={Slide_3} />
        <Stack.Screen name="Let_s_In" component={Let_s_In} />
        <Stack.Screen name="Creat_Account" component={Create_Account} />
        <Stack.Screen
          name="AfterWelcomeScreen"
          component={AfterWelcomeScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
