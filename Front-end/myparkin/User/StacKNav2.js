import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileFill from './Screens/ProfileFill.js'
import MarkerDetail from './Screens/MarkerDetail'
import SearchFilter from './Screens/SearchFilter'
import ParkingTimer from './Screens/ParkingTimer'

const Stack = createNativeStackNavigator()


const StacKNav2 = () =>{
return (
<Stack.Navigator screenOptions={{headerShown: false}}>

       {/* <Stack.Screen name='ProfileFill' component={ProfileFill} />
      <Stack.Screen name="MarkerDetail" component={MarkerDetail} />  */}
       {/* <Stack.Screen name='SearchFilter' component={SearchFilter} />  */}
        <Stack.Screen name='ParkingTimer' component={ParkingTimer} />
    </Stack.Navigator>
    )
}

export default StacKNav2;
