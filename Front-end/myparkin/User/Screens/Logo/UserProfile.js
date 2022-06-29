import React from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Image,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";

export default function UserProfile() {
  return (
    <View style={styles.Iphone13ProMax11}>
      <View style={styles.Group523}>
        <View style={styles.Group186}>
          {/* <Image
            style={styles.Frame}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A52?alt=media&token=93b3cb9f-c972-4d99-8ff6-5df1ea6ca925",
            }}
          /> */}
          <Text style={styles.Txt151}>Fill Your Profile</Text>
        </View>
        {/* <View style={styles.Group058}>
          <View style={styles.Group593}>
            <Image
              style={styles.Frame1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A62?alt=media&token=cd03a6a7-e118-4bd2-9a6d-3784d16698ba",
              }}
            />
          </View>
        </View> */}

        <TextInput
          style={styles.Group153}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="FullName"
          keyboardType="numeric"
        />

        {/* <TextInput
          style={styles.Group982}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="NickName"
          keyboardType="numeric"
        /> */}

        <TextInput
          style={styles.Group153}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Date Of Birth"
          keyboardType="numeric"
        />
        {/* <Image
          style={styles.Frame2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A70?alt=media&token=94236f2c-d77a-4e3e-ac3f-be4076d7944f",
          }}
        /> */}

        <TextInput
          style={styles.Group153}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Email"
          keyboardType="numeric"
        />
        {/* <Image
            style={styles.Frame3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A72?alt=media&token=b864363c-5eb3-4f0a-9896-a1bdc0d9a41d",
            }}
          /> */}

        {/* <View style={styles.Group687}> */}
        {/* <Image
            style={styles.Frame4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A74?alt=media&token=0dfcc16d-055d-4a62-ba14-6978841e3338",
            }}
          /> */}
        {/* <Image
            style={styles.Frame5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A76?alt=media&token=f4529789-0f37-4798-b898-adfae5a40985",
            }}
          /> */}
        <TextInput
          style={styles.Group153}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        {/* </View> */}

        <TextInput
          style={styles.Group153}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Gender"
          keyboardType="numeric"
        />
        {/* <Image
          style={styles.Frame6}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A78?alt=media&token=0d2deb67-c577-415c-8841-a46e0dc3d187",
          }}
        /> */}
        <Pressable style={styles.Group593}>
          <Text style={styles.Txt188}>Continue</Text>
        </Pressable>

        {/* <Button
          style={styles.Group593}
          title="Continue"
          onPress={() => Alert.alert("Simple Button pressed")}
        /> */}
      </View>

      {/* <Image
        style={styles.Frame7}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0zoou8wc9sbh-262%3A55?alt=media&token=eff87358-524c-47b5-bc4b-3471b934a297",
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax11: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 72,
    paddingBottom: 55,
    paddingLeft: 29,
    paddingRight: 29,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
  },
  Group523: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 100,
    // backgroundColor: "blue",
    width: "90%",
    height: "100%",
  },
  Group186: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27,
    // backgroundColor: "brown",
  },
  Frame: {
    width: 26,
    height: 18,
    marginRight: 19,
  },
  Txt151: {
    fontSize: 29,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
  },

  Group058: {
    paddingTop: 96,
    paddingBottom: 9,
    paddingLeft: 104,
    paddingRight: 1,
    marginBottom: 30,
    borderRadius: 66,
    backgroundColor: "rgba(217,217,217,1)",
    width: "30%",
    height: 132,
    // backgroundColor: "red",
  },
  Group593: {
    paddingTop: 5,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(188,0,99,1)",
    width: "70%",
    height: "10%",
    // backgroundColor: "yellow",
    alignItems: "center",
  },
  Frame1: {
    width: 12,
    height: 12,
  },

  Group687: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 262,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "90%",
    height: "12%",
  },
  Txt188: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
  },

  Group982: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 259,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 90,
    height: 56,
  },
  Txt188: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
  },

  Group177: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 20,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Txt212: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
    marginRight: 213,
  },
  Frame2: {
    width: 16,
    height: 16.52,
  },

  Group478: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 27,
    paddingRight: 20,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Txt1511: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
    marginRight: 259,
  },
  Frame3: {
    width: 16,
    height: 11.9,
  },

  Group865: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 27,
    paddingRight: 159,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Frame4: {
    width: 27,
    height: 18,
    marginRight: 14,
  },
  Frame5: {
    width: 6,
    height: 10.79,
    marginRight: 18,
  },
  Txt188: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
  },

  Group326: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 27,
    paddingRight: 23,
    marginBottom: 54,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
  },
  Txt707: {
    fontSize: 15,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    color: "rgba(183,176,176,1)",
    marginRight: 248,
  },
  Frame6: {
    width: 10,
    height: 7.33,
  },

  Group461: {
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 130,
    paddingRight: 127,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    width: 337,
    height: 53,
  },
  Txt624: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Frame7: {
    position: "absolute",
    top: 168,
    left: 164,
    width: 95,
    height: 100,
  },

  Group153: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: "5%",
    paddingRight: "45%",
    marginBottom: 28,
    borderRadius: 15,
    backgroundColor: "rgba(217,217,217,0.5)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: "80%",
    height: "10%",
    // backgroundColor: "pink",
  },
});
