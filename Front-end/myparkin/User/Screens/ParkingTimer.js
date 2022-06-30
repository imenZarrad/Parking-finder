import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { CountdownCircleTimer, useCountdown } from 'react-native-countdown-circle-timer';



export default function ParkingTimer() {
    const [isPlaying, setIsPlaying] = React.useState(true);

   
    const children = ( {remainingTime} ) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
      
        return `${hours}:${minutes}:${seconds}`
      }
    return (
        <View style={styles.container}>
      {/* <CountdownCircleTimer
        isPlaying={isPlaying}
        // initialRemainingTime= {{remainingTime: 7200}}
        // duration={10}
        // initialRemainingTime={1}
        children={'7200'}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer> */}
    {/* <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} /> */}
    <CountdownCircleTimer
    isPlaying
    duration={7200}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{children({remainingTime})}</Text>}
  </CountdownCircleTimer>
  </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    }
  });