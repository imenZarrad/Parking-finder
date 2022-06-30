import * as React from "react";
import MapView from "react-native-maps";
import { Marker, Callout, Circle } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Animated,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Footer } from "../Footer";

import { useState, useEffect } from "react";
import MarkersInformation from "./MarkersInformation";
import * as Location from "expo-location";

function Map() {
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [parkingname, setparkingname] = useState("");
  const [parkingImage, setparkingImage] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [oneparking, setoneParking] = useState([]);
  const [showParking, setshowParking] = useState(false);
  const [mapHieght, setmapHeight] = useState("88%");

  const { width, height } = Dimensions.get("window");
  const ParkingToDisplay = (latitude) => {
    let oneParking = MarkersInformation.filter((parking) => {
      return parking.coordinate.latitude === latitude;
    });

    setoneParking(oneParking);
    setparkingname(oneparking[0].parkingName);
    setprice(oneparking[0].price);
    setDescription(oneparking[0].description);
    console.log();
    setparkingImage(oneparking[0].image);
    console.log(parkingImage);
    setshowParking(true);
    setmapHeight("58%");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      Location.getCurrentPositionAsync({}).then((location) => {
        setlatitude(location.coords.latitude);
        setlongitude(location.coords.longitude);
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{
          width: Dimensions.get("window").width,
          // height: Dimensions.get("window").height ,
          height: mapHieght,
        }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton={true}
      >
        <Marker
          title="test title"
          description="test description"
          coordinate={{
            latitude: latitude || 58.80278,
            longitude: longitude || 10.17972,
          }}
          pinColor="blue"
        >
          {console.log(latitude, longitude)}
          <Callout>
            <Text>Your position</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: latitude || 58.80278,
            longitude: longitude || 10.17972,
          }}
          radius={1000}
        />
        {MarkersInformation.map((element, index) => {
          return (
            <Marker
              onPress={(marker) =>
                ParkingToDisplay(marker.nativeEvent.coordinate.latitude)
              }
              key={index}
              pinColor="green"
              coordinate={{
                latitude: element.coordinate.latitude,
                longitude: element.coordinate.longitude,
              }}
            >
              <Callout>
                <Text>{element.description}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      {showParking && (
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: parkingImage,
            }}
          ></Image>
          <Text style={styles.cardtitle}>parking name : {parkingname}</Text>
          <Text style={styles.cardDescription}>
            Parking description :{description}
          </Text>

          <View style={styles.btncontainter}>
            <Button title="Book a place" style={styles.button}></Button>
          </View>
        </View>
      )}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    height: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height ,
    height: "88%",
  },
  btncontainter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  textContent: {
    flex: 2,
    padding: 10,
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
  test: {
    flex: 1,
    backgroundColor: "black",
  },
  button: {
    bottom: 0,
    height: "20%",

    backgroundColor: "red",
  },

  card: {
    position: "relative",
    // backgroundColor: "orange",
    elevation: 2,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    bottom: 20,
    left: -10,
    height: "30%",
    width: "100%",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "60%",
    alignSelf: "center",
    resizeMode: "cover",
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  Group41010: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "13%",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
});
/**/

export default Map;
