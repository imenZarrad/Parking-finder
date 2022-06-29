import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Lottie from "lottie-react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function Iphone13ProMax61() {

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    })
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(text, reg.test(text));
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: -5 }],
          transform: [{ translateY: -5 }],
        }}
      >
        <View style={styles.Iphone13ProMax61}>
          <View style={styles.Frame217}>
            <View style={styles.Frame159}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Let_s_In")}
              >
                <Lottie
                  source={require("./assets/arrow.json")}
                  autoPlay
                  loop
                  style={styles.FrameLottie}
                />
              </TouchableWithoutFeedback>
              <Text style={styles.Txt269}>Your Profile</Text>
            </View>
            <Image
              style={styles.Group158}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hs7mujhdsdi-322%3A241?alt=media&token=e36f87a7-cf27-4382-bf10-a8eb634eb232",
              }}
            />
            <SafeAreaView style={styles.Frame166}>
              <TextInput
                maxLength={10}
                style={styles.Group159}
                placeholder='FullName'
              />
              {/* <TextInput maxLength={10} style={styles.Txt856} placeholder="FullName"/> */}
              {/* </View> */}
              <TextInput
                maxLength={7}
                style={styles.Group160}
                placeholder='Username'
              />
              {/* <TextInput style={styles.Txt856} placeholder="Username"/> */}
              {/* </View> */}
              <TouchableOpacity style={styles.Group161} onPress={showDatepicker}>
                <Text style={styles.Txt664}>Birthdate: {String(date)}</Text>
                <Image
                  style={styles.Frame3}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hs7mujhdsdi-322%3A229?alt=media&token=b6cce5c3-d97e-4930-b501-8119c53dfd93",
                  }}
                />
                
                </TouchableOpacity>
                
                
              <TextInput style={styles.Group162} placeholder='Email' onChangeText={validate} />
                
                <Image
                  style={styles.Frame4}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hs7mujhdsdi-322%3A231?alt=media&token=286c1bcf-aca9-4069-8905-f21ef5dfa5af",
                  }}
                />
              
              <TextInput keyboardType="numeric" style={styles.Group163} placeholder='Phone Number'/>
                <Image
                  style={styles.Frame5}
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png",
                  }}
                />
              <View style={styles.Group164}>
                <Text style={styles.Txt283}>Gender</Text>
                <Image
                  style={styles.Frame7}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hs7mujhdsdi-322%3A237?alt=media&token=6bfc21ad-de9f-4ffb-820b-a9fb826b6667",
                  }}
                />
              </View>
            </SafeAreaView>
            <View style={styles.Frame165}>
              <Text style={styles.Txt211}>Continue</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax61: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5,
    // top: "0.25%",
    paddingBottom: 26,
    paddingLeft: 22,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  FrameLottie: {
    width: "25%",
    height: "25%",
    paddingTop: 40,
    // marginTop:"30%",
    // marginLeft:"-10%",
    // transform: [{ translateX: -25 }]
  },
  Frame217: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Frame159: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginBottom: 17,
  },

  Txt269: {
    fontSize: 29,
    fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: "80%",
    top: 13,
    // backgroundColor: "blue",
  },

  Group158: {
    width: 132,
    height: 133,
    marginBottom: 17,
  },
  Frame166: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 17,
    width: "100%",
    height: "60%",
  },
  Group159: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 262,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "100%",
    height: "12%",
  },

  Group160: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 259,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "100%",
    height: "12%",
    // color: "rgba(183,176,176,1)",
  },

  Group161: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 262,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "98%",
    height: "12%",
  },
  Txt664: {
    fontSize: 10,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    color: "rgba(183,176,176,1)",
    // marginRight: 213,
  },
  Frame3: {
    width: 16,
    height: 16.52,
    transform: [{ translateX: 270}, {translateY:-15 }],
  },

  Group162: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 259,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "100%",
    height: "12%",
  },
  Frame4: {
    width: 16,
    height: 11.9,
    transform: [{ translateX: 290}, {translateY:-55 }]
  },

  Group163: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 34,
    paddingRight: 160,
    marginBottom: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Frame5: {
    width: 27,
    height: 18,
    transform: [{translateY:-59 },{translateX: 3 }]
  },
  Frame6: {
    width: 6,
    height: 10.79,
    marginRight: 18,
  },
  Txt856: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
  },

  Group164: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 27,
    paddingRight: 23,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Txt283: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
    marginRight: 248,
  },
  Frame7: {
    width: 10,
    height: 7.33,
  },

  Frame165: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 128,
    paddingRight: 128,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
  },
  Txt211: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
});
