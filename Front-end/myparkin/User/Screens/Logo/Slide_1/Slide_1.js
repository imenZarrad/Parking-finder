import React from "react"
import { useNavigation } from "@react-navigation/native";
import {  Image, Text, View } from "react-native"
import styles from './styles';

export default function Slide_1() {

    const navigation = useNavigation();

  return (
    <View style={styles.containerImage}>
    <View style={styles.container}>
      <Text style={styles.Txt444}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </Text>
      <View style={styles.Group764}>
        
        <Image
          style={styles.Undraw_season_change_f99v1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4r5jn9ic585-4%3A54?alt=media&token=f5b43594-1f4f-454d-aed8-4bae9f4f0e99",
          }}
        />
        <Text style={styles.Txt864}>Find Parking Places Around You Easily</Text>
        <View style={styles.Group244}>
          <View style={styles.Rectangle3} />
          <View style={styles.Rectangle1} />
          <View style={styles.Rectangle2} />
        </View>
        <View style={styles.Group1063}>
          <Text style={styles.Txt653} onPress={()=> navigation.navigate("Slide_2")} >Next</Text>
        </View>
        <View style={styles.Group7710}>
          <Text style={styles.Txt208} onPress={()=> navigation.navigate("Let_s_In")}>Skip</Text>
        </View>
      </View>
    </View>
    </View>
  )
}


