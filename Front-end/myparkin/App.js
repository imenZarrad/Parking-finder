import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './User/StackNavigator';
import { StatusBar } from 'expo-status-bar';
import  StackNav2  from './User/StacKNav2'

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNav2 /> */}
      <StackNavigation />
      <StatusBar style='dark' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
