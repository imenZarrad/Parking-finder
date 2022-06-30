import React from "react";
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

export default function EditProfile() {
  return (
    <KeyboardAvoidingView
    style={styles.Iphone13ProMax55}
    behavior="padding"
  >
    {/* <View style={styles.Iphone13ProMax55}> */}
      {/* <Text style={styles.Txt934}>Update</Text> */}
      <Pressable style={styles.Rectangle4}>
        <Text style={styles.Txt934}>Update</Text>
      </Pressable>

      {/* <View style={styles.Rectangle4} /> */}
      <Text style={styles.Txt927}>Female</Text>
      {/* <View style={styles.Rectangle11} /> */}
      <TextInput style={styles.Rectangle11} placeholder="" />
      {/* <Image
        style={styles.Frame}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1477?alt=media&token=27ef25f5-2220-4d8a-a80d-35dadf2fd7b9",
        }}
      /> */}
      {/* <Image
        style={styles.Frame1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1473?alt=media&token=02822d70-9d4c-495f-b17a-de62a0a7b5ea",
        }}
      /> */}
      {/* <View style={styles.Group226}> */}
      {/* <Image
          style={styles.Frame2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1475?alt=media&token=7acbf0f6-d601-48c4-b6d7-d6feabf11218",
          }}
        /> */}
      <TextInput style={styles.Group226} placeholder="ksfjdsgjdsgjdsjkl" />
      {/* </View> */}
      <Text style={styles.Txt182}>+92 324 4449931</Text>
      <Image
        style={styles.Frame3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1471?alt=media&token=992d4fcb-fbfc-4486-bee6-9b57e564d89e",
        }}
      />
      <Text style={styles.Txt679}>anabiajatoi448@gmail.com</Text>

      {/* <View style={styles.Rectangle9} /> */}
      <TextInput style={styles.Rectangle9} placeholder="" />
      <Image
        style={styles.Frame4}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1469?alt=media&token=c8e32fbf-0fb9-4e39-a03a-d4145ed80a74",
        }}
      />
      {/* <View style={styles.Rectangle8} /> */}
      <TextInput style={styles.Rectangle8} placeholder="" />
      <Text style={styles.Txt7101}>12/27/1995</Text>
      {/* <View styles={styles.Rectangle7} /> */}
      <TextInput style={styles.Rectangle7} placeholder="" />
      <Text style={styles.Txt347}>Rani</Text>
      {/* <View style={styles.Rectangle6} /> */}
      <TextInput style={styles.Rectangle6} placeholder="" />
      <Text style={styles.Txt155}>Anabia</Text>
      {/* <View style={styles.Rectangle14} /> */}

      {/* <Image
        style={styles.Frame5}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1461?alt=media&token=0bb0d911-0052-4005-af8e-611e6b9879c0",
        }}
      /> */}
      {/* <Image
        style={styles.Ellipse1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1459?alt=media&token=e68b0c0a-8f8e-4272-9253-7c7aeb263738",
        }}
      /> */}
      {/* <Image
        style={styles.Frame6}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbq5tjbp3mg-79%3A1457?alt=media&token=c809775d-82d5-4b45-b29b-9bc82029f7ba",
        }}
      /> */}
      <Text style={styles.Txt547}>Edit Profile</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax55: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 29,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: "100%",
    width: "100%",
    backgroundColor: "green",
  },
  Txt934: {
    position: "absolute",
    top: 0,
    left: 150,
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    // color: "orange",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 62,
    height: 20,
  },
  Rectangle4: {
    // position: "relative",
    top: 560,
    // left: 41,
    backgroundColor: "rgba(188,0,99,1)",
    width: "95%",
    height: "5%",
    borderRadius: 50,
    backgroundColor: "blue",
    marginBottom: 0,
  },
  Txt927: {
    position: "absolute",
    top: 480,
    left: 181,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 57,
    height: 23,
  },
  Rectangle11: {
    position: "absolute",
    top: 500,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "95%",
    height: "6%",
    borderRadius: 15,
    backgroundColor: "orange",
  },
  Frame: {
    position: "absolute",
    top: 695,
    left: 205,
    width: 10,
    height: 7.33,
  },
  Frame1: {
    position: "absolute",
    top: 610,
    left: 196,
    width: 27,
    height: 18,
  },
  Group226: {
    position: "absolute",
    top: 430,
    none: "0px",
    paddingTop: 1,
    paddingBottom: 42,
    paddingLeft: 177,
    paddingRight: 183,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "90%",
    height: "4%",
    backgroundColor: "brown",
  },
  Frame2: {
    width: 6,
    height: 10.79,
  },

  Txt182: {
    position: "absolute",
    top: 410,
    left: 147,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 126,
    height: 23,
  },
  Frame3: {
    position: "absolute",
    top: 530,
    left: 202,
    width: 16,
    height: 11.9,
  },
  Txt679: {
    position: "absolute",
    top: 335,
    left: 101,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 217,
    height: 23,
  },
  Rectangle9: {
    position: "absolute",
    top: 360,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "95%",
    height: "6%",
    borderRadius: 15,
    backgroundColor: "orange",
  },
  Frame4: {
    position: "absolute",
    top: 443,
    left: 202,
    width: 16,
    height: 16.52,
  },
  Rectangle8: {
    position: "absolute",
    top: 285,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "95%",
    height: "6%",
    borderRadius: 15,
    backgroundColor: "orange",
  },
  Txt7101: {
    position: "absolute",
    top: 260,
    left: 170,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 80,
    height: 23,
  },
  Rectangle7: {
    position: "absolute",
    top: 210,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "95%",
    height: "6%",
    borderRadius: 15,
    backgroundColor: "orange",
  },
  Txt347: {
    position: "absolute",
    top: 180,
    left: 193,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 34,
    height: 23,
  },
  Rectangle6: {
    position: "absolute",
    top: 130,
    left: 26,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "95%",
    height: "6%",
    borderRadius: 15,
    mixBlendMode: "normal",
    paddingBottom: 0,
    backgroundColor: "orange",
  },
  Txt155: {
    position: "absolute",
    top: 100,
    left: 182,
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 56,
    height: 23,
  },
  Rectangle14: {
    position: "absolute",
    top: 225,
    left: 197,
    backgroundColor: "rgba(188,0,99,1)",
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: "red",
  },
  Frame5: {
    position: "absolute",
    top: 225,
    left: 204,
    width: 12,
    height: 12,
  },
  Ellipse1: {
    position: "absolute",
    top: 89,
    left: 144,
    width: 132,
    height: 132,
    backgroundColor: "purple",
  },
  Frame6: {
    position: "absolute",
    top: 88,
    left: 197,
    width: 26,
    height: 18,
  },
  Txt547: {
    position: "absolute",
    top: 40,
    left: 69,
    fontSize: 29,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
    height: 34,
  },
});
