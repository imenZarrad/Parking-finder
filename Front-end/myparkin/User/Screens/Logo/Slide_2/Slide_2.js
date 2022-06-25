import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import styles from './styles';


 const Slide_2 = () => {
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
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wxd2ypxydpi-4%3A80?alt=media&token=34e6a074-4cd4-4707-9068-d44ed3e975a5",
          }}
        />
        <Text style={styles.Txt864}>Extend Parking Time As You Need</Text>
        <View style={styles.Group244}>
          <View style={styles.Rectangle3} />
          <View style={styles.Rectangle1} />
          <View style={styles.Rectangle2} />
        </View>
        <View style={styles.Group1063}>
          <Text style={styles.Txt653} onPress={()=> navigation.navigate("Slide_3")}>Next</Text>
        </View>
        <View style={styles.Group7710}>
          <Text style={styles.Txt208} onPress={()=> navigation.navigate("Let_s_In")}>Skip</Text>
        </View>
      </View>
    </View>
    </View>
  )
}

export default Slide_2;


