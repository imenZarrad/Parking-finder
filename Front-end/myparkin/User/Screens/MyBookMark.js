import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Footer } from "./Footer";

export default function MyBookMark() {
  return (
    <View style={styles.Iphone13ProMax46}>
      <View style={styles.Group527}>
        <View style={styles.Group730}>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A599?alt=media&token=9ead11ca-dfbe-4e90-bd38-081436d8f9c4",
            }}
          />
          <Text style={styles.Txt845}>My Bookmark</Text>
          <View style={styles.Group96}>
            <View style={styles.Group18}>
              <View style={styles.Ellipse22} />
              <View style={styles.Ellipse24} />
            </View>
          </View>
        </View>
        <View style={styles.Group904}>
          <Image
            style={styles.Group33}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A503?alt=media&token=1bd5ba30-499d-4a3c-b4d7-bb83d929b00c",
            }}
          />
          <Text style={styles.Txt159}>Search</Text>
        </View>
        <ScrollView>
          <View style={styles.Group302}>
            <Image
              style={styles.Rectangle63}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A642?alt=media&token=c88f9dcd-5e20-4312-8f05-7f0d1e3a828f",
              }}
            />
            <View style={styles.Group110}>
              <Text style={styles.Txt784}>Gorsted Warton</Text>
              <Text style={styles.Txt237}>4520 Tempal hill </Text>
            </View>
            <View style={styles.delete}>
              <View style={styles.Group111}>
                <View style={styles.Line7} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
      <Image
        style={styles.Group25}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A600?alt=media&token=c58164a8-2799-4c21-ba08-5e0af807ff96",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax46: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
  },
  delete: {
    right: "10%",
  },
  Group527: {
    top: "5%",
    display: "flex",
    alignItems: "center",
    // backgroundColor: "blue",
    height: "88%",
    width: "100%",
    justifyContent: "center",
    left: 0,
  },
  Group730: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 28,
  },
  Vector: {
    width: 25,
    height: 25,
    marginRight: 22,
  },
  Txt845: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 29,
    color: "rgba(0,0,0,1)",
    width: 282,
    marginRight: 3,
  },
  Group96: {
    paddingTop: 8.5,
    paddingBottom: 8.5,
    paddingLeft: 4.5,
    paddingRight: 4.5,
    borderRadius: 12,
    borderWidth: 2.5,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 24,
    height: 24,
  },
  Group18: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,1)",
    width: 10.29,
    height: 2.06,
  },
  Ellipse22: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.06,
    height: 2.06,
    borderRadius: 1,
    marginRight: 6,
  },
  Ellipse24: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 2.06,
    height: 2.06,
    borderRadius: 1,
  },

  Group904: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 21,
    paddingRight: 250,
    marginBottom: 22,
    borderRadius: 10,
    backgroundColor: "rgba(239,236,236,0.5)",
  },
  Group33: {
    width: 18,
    height: 18,
    marginRight: 17,
  },
  Txt159: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(202,202,202,1)",
  },

  Group230: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group102: {
    position: "relative",
    marginRight: 88,
    width: 122,
    height: 40,
  },
  Txt300: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 110,
    height: 23,
  },
  Txt511: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 122,
    height: 17,
  },

  Group100: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A594?alt=media&token=01d0ce03-03c5-4154-8dfe-8b7af3cb8630) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group230: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group104: {
    position: "relative",
    marginRight: 77,
    width: 133,
    height: 40,
  },
  Txt874: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 133,
    height: 23,
  },
  Txt869: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 115,
    height: 17,
  },

  Group103: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A607?alt=media&token=3871cd8a-a1c9-4167-9941-a70cae0e7f52) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group230: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group106: {
    position: "relative",
    marginRight: 85,
    width: 125,
    height: 40,
  },
  Txt168: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 125,
    height: 23,
  },
  Txt6410: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 112,
    height: 17,
  },

  Group105: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A615?alt=media&token=a1bd2829-7a82-4420-8d7d-efab1c297340) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group230: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group108: {
    position: "relative",
    marginRight: 71,
    width: 139,
    height: 40,
  },
  Txt651: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 139,
    height: 23,
  },
  Txt870: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 127,
    height: 17,
  },

  Group107: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A623?alt=media&token=27311f08-79cb-411b-9422-3ac35cfc034b) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group230: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group110: {
    position: "relative",
    marginRight: 94,
    width: "116",
    height: 40,
  },
  Txt784: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 116,
    height: 23,
  },
  Txt872: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 85,
    height: 17,
  },

  Group109: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A631?alt=media&token=620d80d4-2a09-4503-94ae-f4327de071af) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group302: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 17,
    paddingRight: 29,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    // backgroundColor: "green",
    width: "90%",
  },
  Rectangle63: {
    width: 60,
    height: 60,
    marginRight: 22,
  },
  Group110: {
    position: "relative",
    marginRight: 94,
    width: 116,
    height: 40,
  },
  Txt784: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 116,
    height: 23,
  },
  Txt237: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    width: 90,
    height: 17,
  },

  Group111: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    backgroundColor: "green",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A639?alt=media&token=0c0712a0-85ae-469d-a12e-36af25b687c9) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group715: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 22,
    paddingBottom: 21,
    paddingLeft: 54,
    paddingRight: 51,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  Group220: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group181: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 75,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/t94hi8byu4j-79%3A572?alt=media&token=3df41e28-9bbf-40f4-8ed1-902fc9056f73) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 10,
    height: 1,
  },

  Group: {
    width: 22.9,
    height: 27,
    marginRight: 75,
  },
  Vector1: {
    width: 25,
    height: 27,
  },

  Group161: {
    display: "flex",
    flexDirection: "row",
  },
  Txt392: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt232: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    marginRight: 62,
  },
  Txt174: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 64,
  },
  Txt286: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
  },

  Group25: {
    position: "absolute",
    top: 43,
    left: 5,
    width: 13.59,
    height: 14.97,
  },
});
