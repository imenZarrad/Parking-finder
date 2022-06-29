import React from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";

export default function LogIn() {
  return (
    <View style={styles.Iphone13ProMax59}>
      <View style={styles.Frame156}>
        <View style={styles.Frame158}>
          <Image
            style={styles.Frame}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A56?alt=media&token=dce6c763-eecb-4381-9a46-8eb56e88f1bf",
            }}
          />
          <Text style={styles.Txt8105}>Login to your Account</Text>
        </View>
        <View style={styles.Frame157}>
          <View>
            <TextInput
              style={styles.Group153}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Email"
              keyboardType="numeric"
            />
            {/* <Image
              style={styles.Frame2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A58?alt=media&token=14aa9b20-e8ef-4437-bd4e-527e48bbc35d",
              }}
            />
            <Text style={styles.Txt198}>Email</Text> */}
          </View>
          <View>
            <TextInput
              style={styles.Group153}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Password"
              keyboardType="numeric"
            />
            {/* <Image
              style={styles.Frame3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A60?alt=media&token=ddb50e8d-0287-4c3a-92cd-19ee22f76e32",
              }}
            />
            <Text style={styles.Txt107}>Password</Text> */}

            <Pressable style={styles.Group593}>
              <Text style={styles.Txt188}>Continue</Text>
            </Pressable>

            {/* <Button
              styles={styles.Group593}
              title="Press me"
              onPress={() => Alert.alert("Simple Button pressed")}
            /> */}
            {/* <Image
                style={styles.Frame4}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A79?alt=media&token=efd67fad-8e52-40ba-bc05-217d8bca9240",
                }}
              /> */}
          </View>
        </View>
        <View style={styles.Group155}>
          <View style={styles.Frame155}>
            <View style={styles.Group154}>
              <View style={styles.Rectangle13} />
              <Text style={styles.Txt771}>Remember me</Text>
            </View>
            {/* <View style={styles.Group151}>
              <Text style={styles.Txt559}>Sign in</Text>
            </View> */}
            <Text style={styles.Txt771}>Forgot the password?</Text>
          </View>
          <View style={styles.Frame156}>
            <View style={styles.Group150}>
              <Text style={styles.Txt253}>or continue with</Text>
            </View>
            <Image
              style={styles.Group148}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A82?alt=media&token=700bcfaf-e84a-4844-a02a-f8df028a778e",
              }}
            />
            <View style={styles.Group149}>
              <Text style={styles.Txt425}>Already have an account?</Text>
              <Text style={styles.Txt396}>Sign up</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax59: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 13,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    // backgroundColor: "orange",
  },
  Frame156: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Frame158: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 36,
    // backgroundColor: "blue",
    width: "80%",
  },
  Frame: {
    width: 26,
    height: 18,
    marginBottom: 24,
  },
  Txt8105: {
    fontSize: 48,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 56,
    color: "rgba(0,0,0,1)",
    width: 391,
  },

  Frame157: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
    // backgroundColor: "green",
  },
  Group153: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: "5%",
    paddingRight: "45%",
    marginBottom: 28,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "80%",
    // backgroundColor: "pink",
  },
  Frame2: {
    width: 15,
    height: 11,
    marginRight: 24,
  },
  Txt198: {
    fontSize: 15,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 49,
    height: 20,
  },

  Group152: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 17,
    paddingBottom: 17,
    // paddingLeft: "20%",
    // paddingRight: "0%",
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",

    width: "80%",
  },
  Frame3: {
    width: 12,
    height: 15,
    marginRight: 22,
  },
  Txt107: {
    fontSize: 15,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    color: "rgba(169,169,169,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 81,
    height: 20,
    marginRight: 181,
  },
  Group1: {
    paddingTop: 2,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/46e5a9gnube-307%3A79?alt=media&token=efd67fad-8e52-40ba-bc05-217d8bca9240) */
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(169,169,169,1)",
    width: "80%",
    height: "30%",
    // backgroundColor: "blue",
  },
  Frame4: {
    width: 17,
    height: 10,
  },

  Group155: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red",
  },
  Frame155: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 58,
    // backgroundColor: "brown",
  },
  Group154: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  Rectangle13: {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 18,
    height: 19,
    borderRadius: 6,
    marginRight: 19,
  },
  Txt771: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group151: {
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: "0%",
    paddingRight: "0%",
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: "500%",
    height: 53,
  },
  Txt559: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Txt771: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Frame156: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "purple",
    height: "40%",
    width: "90%",
  },
  Group150: {
    marginBottom: 26,
    width: 117,
    height: 23,
    // backgroundColor: "red",
  },
  Txt253: {
    fontSize: 16,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(169,169,169,1)",
    textAlign: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },

  Group148: {
    width: "80%",
    height: 53,
    marginBottom: 26,
    // backgroundColor: "blue",
  },
  Group149: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "blue",
    width: "80%",
  },
  Txt425: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    color: "rgba(156,148,148,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 207,
    height: 25,
    marginRight: 4,
  },
  Txt396: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 65,
    height: 25,
  },
  Group593: {
    paddingTop: 5,
    paddingBottom: 6,
    paddingLeft: 90,
    paddingRight: 90,
    borderRadius: 5,
    backgroundColor: "rgba(188,0,99,1)",
    width: "200%",
    height: "25%",
    // backgroundColor: "yellow",
  },
});
