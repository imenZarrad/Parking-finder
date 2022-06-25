import React from "react"
import { useNavigation } from "@react-navigation/native";
import {  Image, Text, View } from "react-native"
import styles from './styles';

export default function Iphone13ProMax7() {
  return (
    <View style={styles.containerImage}>
    <View style={styles.container}>
      <View style={styles.Group178}>
        <Image
          style={styles.Frame}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6an6jmtr5gk-14%3A22?alt=media&token=dd1e6118-219c-4867-9e8a-64794a334462",
          }}
        />
        <View style={styles.Group927}>
          <Text style={styles.Txt435}>Let’s you in</Text>
          <View style={styles.Group122}>
            <Image
              style={styles.Frame1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6an6jmtr5gk-11%3A3?alt=media&token=c43eb08b-9f55-4dd9-abf7-c814b84d73c7",
              }}
            />
            <Text style={styles.Txt976}>Continue with Facebook</Text>
          </View>
          <View style={styles.Group588}>
            <Image
              style={styles.Frame2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6an6jmtr5gk-11%3A5?alt=media&token=66c9967a-6c8c-462e-8b79-570901b4a4b8",
              }}
            />
            <Text style={styles.Txt976}>Continue with Google</Text>
          </View>
          
          <View style={styles.Group216}>
            <View style={styles.Line1} />
            <Text style={styles.Txt253}>or</Text>
            <View style={styles.Line2} />
          </View>
          <View style={styles.Group865}>
            <Text style={styles.Txt124}>Sign in with password</Text>
          </View>
          <View style={styles.Group7310}>
            <Text style={styles.Txt883}>Don’t have an account?</Text>
            <Text style={styles.Txt752}>Sign up</Text>
          </View>
        </View>
      </View>
    </View>
    </View>
  )
}


