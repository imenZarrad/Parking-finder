import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileFill from './Screens/ProfileFill.js'
import MarkerDetail from './Screens/MarkerDetail'
import SearchFilter from './Screens/SearchFilter'

const Stack = createNativeStackNavigator()


const StackNavigation = () =>{
return (
<Stack.Navigator screenOptions={{headerShown: false}}>

       <Stack.Screen name='ProfileFill' component={ProfileFill} />
      <Stack.Screen name="MarkerDetail" component={MarkerDetail} /> 
       <Stack.Screen name='SearchFilter' component={SearchFilter} /> 



    </Stack.Navigator>
    )
}

export default StackNavigation;
