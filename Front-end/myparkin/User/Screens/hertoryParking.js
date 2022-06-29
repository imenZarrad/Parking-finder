import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
export default function HestoryParking() {
  const logOut = () => {
    signOut(auth)
      .then((res) => {
        // setIsSignedIn(false);
        alert("ok");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <View style={styles.Iphone13ProMax49}>
      <View style={styles.Group163}>
        <View style={styles.Group865}>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A924?alt=media&token=481678b1-9e11-4345-9aa8-02128fd80e32",
            }}
          />
          <Text onPress={logOut} style={styles.Txt537}>
            My Parking
          </Text>
          <Image
            style={styles.Group113}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A927?alt=media&token=a1af44a4-616f-4e53-bd84-5ba5e6d6c1e2",
            }}
          />
        </View>
        <View style={styles.Group043}>
          <View style={styles.Group718}>
            <Text style={styles.Txt400}>Ongoing</Text>
          </View>
          <View style={styles.Group4102}>
            <Text style={styles.Txt879}>Completed</Text>
          </View>
          <View style={styles.Group273}>
            <Text style={styles.Txt400}>Canceled</Text>
          </View>
        </View>
        <View style={styles.Group313}>
          <Text style={styles.Txt180}>Allington Paddock</Text>
          <View style={styles.Group586}>
            <View style={styles.Group472}>
              <Image
                style={styles.Rectangle63}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A945?alt=media&token=a4e3c2bd-ec68-4e45-a937-9250391aca1a",
                }}
              />
              <View style={styles.Group222}>
                <Text style={styles.Txt976}>7518 Washington Alley</Text>
                <View style={styles.Group1075}>
                  <View style={styles.Group0107}>
                    <Text style={styles.Txt684}>/ 2 hours</Text>
                    <View style={styles.Group116}>
                      <Text style={styles.Txt694}>Completed</Text>
                    </View>
                  </View>
                  <Text style={styles.Txt196}>/ 2 hours</Text>
                </View>
              </View>
            </View>
            <View style={styles.Group230}>
              <Text style={styles.Txt857}>View Ticket</Text>
            </View>
          </View>
        </View>
        <View style={styles.Group130}>
          <Text style={styles.Txt5109}>Appleton Warren</Text>
          <View style={styles.Group268}>
            <View style={styles.Group472}>
              <Image
                style={styles.Rectangle63}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A946?alt=media&token=9356e8b1-72c0-4297-bbf3-5bbf6199ba23",
                }}
              />
              <View style={styles.Group222}>
                <Text style={styles.Txt208}>8499 Red Could Coust</Text>
                <View style={styles.Group396}>
                  <View style={styles.Group0107}>
                    <Text style={styles.Txt684}>/ 2 hours</Text>
                    <View style={styles.Group116}>
                      <Text style={styles.Txt694}>Completed</Text>
                    </View>
                  </View>
                  <Text style={styles.Txt196}>/ 2 hours</Text>
                </View>
              </View>
            </View>
            <View style={styles.Group230}>
              <Text style={styles.Txt857}>View Ticket</Text>
            </View>
          </View>
        </View>
        <View style={styles.Group41010}>
          <View style={styles.Group1301}>
            <View style={styles.Group851}>
              <Image
                style={styles.Group99}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A921?alt=media&token=a1079220-cbc1-4e04-99be-256cbacf247d",
                }}
              />
              <View style={styles.Group18}>
                <View style={styles.Line7} />
              </View>
              <View style={styles.Group1085}>
                <Image
                  style={styles.Group115}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A931?alt=media&token=bc514255-d9ce-4e88-b654-88f89ce80898",
                  }}
                />
              </View>
              <Image
                style={styles.Vector1}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A912?alt=media&token=59b63bac-7858-411a-bf97-0136a86869a3",
                }}
              />
            </View>
            <View style={styles.Group0107}>
              <Text style={styles.Txt747}>Home</Text>
              <Text style={styles.Txt413}>Saved</Text>
              <Text style={styles.Txt994}>Booking</Text>
              <Text style={styles.Txt1072}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A925?alt=media&token=d9904088-aa07-4ead-90f0-b629fc4bd982",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Iphone13ProMax49: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 73,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "100%",
  },
  Group163: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "blue",
    height: "100%",
    width: "100%",
  },
  Group865: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  Vector: {
    width: 95,
    height: 25,
    marginRight: 22,
  },
  Txt537: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 29,
    color: "rgba(0,0,0,1)",
    width: 282,
    marginRight: 6,
  },
  Group113: {
    width: 18,
    height: 18,
  },

  Group043: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
    width: "100%",
    backgroundColor: "#fff",
    left: 0,
  },
  Group718: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 22,
    paddingRight: 20,
    marginRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt400: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
  },

  Group4102: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 12,
    marginRight: 18,
    borderRadius: 50,
    backgroundColor: "rgba(188,0,99,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt879: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  Group273: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 18,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 111,
    height: 37,
  },
  Txt400: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
  },

  Group313: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: "97%",
    height: 210,
  },
  Txt180: {
    position: "absolute",
    top: 17,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 166,
    height: 29,
  },
  Group586: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 308,
    height: 188,
  },
  Group472: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 53,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt976: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group1075: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 2,
    paddingBottom: 3.67,
    paddingLeft: 6,
    paddingRight: 0,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(1,219,62,1)",
    width: 87,
    height: 28.67,
  },
  Txt694: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(1,219,62,1)",
    width: 80,
    height: 19,
  },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group230: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 98,
    paddingRight: 98,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 285,
    height: 37,
  },
  Txt857: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group130: {
    position: "relative",
    marginBottom: 22,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: "97%",
    height: 210,
  },
  Txt5109: {
    position: "absolute",
    top: 20,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 156,
    height: 29,
  },
  Group268: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    top: 16,
    none: "0px",
    width: 308,
    height: 188,
  },
  Group472: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 53,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt208: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 11,
  },
  Group396: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 2,
    paddingBottom: 3.67,
    paddingLeft: 6,
    paddingRight: 0,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(1,219,62,1)",
    width: 87,
    height: 28.67,
  },
  Txt694: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(1,219,62,1)",
    width: 80,
    height: 19,
  },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group230: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 98,
    paddingRight: 98,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(188,0,99,1)",
    width: 285,
    height: 37,
  },
  Txt857: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group126: {
    position: "relative",
    marginBottom: 21,
    borderRadius: 10,
    backgroundColor: "rgba(249,249,249,1)",
    width: 358,
    height: 132,
  },
  Txt295: {
    position: "absolute",
    top: 25,
    left: 138,
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 127,
    height: 29,
  },
  Group7410: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 17,
    none: "0px",
    width: 307,
    height: 99,
  },
  Rectangle63: {
    width: 98,
    height: 98,
    marginRight: 26,
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
  },
  Txt976: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(161,161,161,1)",
    marginBottom: 12,
  },
  Group1075: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt684: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  Group116: {
    paddingTop: 2,
    paddingBottom: 3.67,
    paddingLeft: 6,
    paddingRight: 0,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(1,219,62,1)",
    width: 87,
    height: 28.67,
  },
  Txt694: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(1,219,62,1)",
    width: 80,
    height: 19,
  },

  Txt196: {
    fontSize: 8,
    fontWeight: "700",
    color: "rgba(161,161,161,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group41010: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "10%",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  Group1301: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "15%",
    // none: "0px",
    width: "90%",
    height: "16%",
    right: "4%",
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group18: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 77,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A914?alt=media&token=7b249d29-c6da-4d0f-a30d-3574b5e08b4f) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 10,
    height: 1,
  },

  Group1085: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    marginRight: 77,
    backgroundColor: "rgba(188,0,99,1)",
    width: 19,
    height: 24,
  },
  Group115: {
    width: 14.73,
    height: 14.55,
  },

  Vector1: {
    width: 25,
    height: 27,
  },

  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt747: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt413: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 62,
  },
  Txt994: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    marginRight: 64,
  },
  Txt1072: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
  },

  Vector2: {
    position: "absolute",
    top: "25.56%",
    bottom: "44.44%",
    left: "58.18%",
    right: "36.47%",
    width: 22.9,
    height: 27,
  },

  Group: {
    position: "absolute",
    top: 81,
    left: 41,
    width: 13.59,
    height: 14.97,
  },
});
