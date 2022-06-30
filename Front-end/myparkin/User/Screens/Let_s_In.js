import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Image, Text, View, ImageBackground, Button, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import Lottie from 'lottie-react-native';

export default function Let_s_In() {

  const navigation = useNavigation();
  return (
    <View style={styles.GooglePixel}>
      <View style={styles.Android}>
        <View style={styles.Frame180}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Welcome')}>
        <Lottie source={require('./assets/arrow2.json')} autoPlay loop style={styles.FrameLottie}/>
        </TouchableWithoutFeedback>
          <Lottie style={styles.Txt428} source={require('./assets/welcome.json')} autoPlay loop />

        </View>
        <View style={styles.Frame181}>
          <View style={styles.Group177}>
            <Image
              style={styles.Frame2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/29j0srvohqr-353%3A182?alt=media&token=892cf1f0-e097-49f5-9947-9f2fdc598f94",
              }}
            />
            <Text style={styles.Txt218}>Continue with Facebook</Text>
          </View>
          <View style={styles.Group176}>
            <Image
              style={styles.Frame3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/29j0srvohqr-353%3A187?alt=media&token=94bedc9b-2791-43d3-814c-80a2743f23e7",
              }}
            />
            <Text style={styles.Txt218}>Continue with Google</Text>
          </View>
        </View>
        <View style={styles.Frame1781}>
          <View style={styles.Frame174}>
          
          </View>
          <TouchableOpacity style={styles.Frame178} onPress={()=> navigation.navigate("Login")}> 
            <Text style={styles.Txt191}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Frame179} onPress={()=> navigation.navigate("SignUp")}>
            <Text style={styles.Txt199}>Don’t have an account?</Text>
            <Text  style={styles.Txt561}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  GooglePixel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: "100%",
  },
  Android: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // paddingTop: 36,
    paddingBottom: 37,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: "70%",
    width: "100%"
  },
  FrameLottie:{
    width: "35%",
    height: "35%",
    top:"2%",
    marginLeft:"43%"
  },
  Frame180: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top:"4%",   
  },
  Txt428: {
    width: "50%",
    height: "50%",
    marginLeft:"20%",
    marginTop:"5%"
  },

  Frame181: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 29,
    paddingRight:"1%",
   

  },
  Group177: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 29,
    paddingRight: 63,
    marginBottom: 17,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(71, 192, 192, 0.08)",
  },
  Frame2: {
    width: 27,
    height: 27,
    marginRight: 22,
  },
  Txt218: {
    fontSize: 14,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 194,
    height: 24,
  },

  Group176: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 64,
    marginBottom: 17,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(71, 192, 192, 0.08)",
  },
  Frame3: {
    width: 27,
    height: 27,
    marginRight: 25,
  },
  Txt218: {
    fontSize: 14,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 194,
    height: 24,
  },

  Group175: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 26,
    paddingRight: 64,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    backgroundColor:'red'
  },
  Frame4: {
    width: 27,
    height: 32.08,
    marginRight: 24,
  },
  Txt218: {
    fontSize: 14,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 194,
    height: 24,
  },

  Frame1781: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height:"30%",
    paddingRight:20,
    
  },
  Frame174: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 64,
  },
  Txt898: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(5,97,174,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  Line2: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 124,
    height: 1,
  },

  Frame178: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 74,
    paddingRight: 74,
    marginBottom: 64,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    
    
  },
  Txt191: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },

  Frame179: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    
  },
  Txt199: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    color: "rgba(156,148,148,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  Txt561: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(5,97,174,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
