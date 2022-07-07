// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Image,
//   Text,
//   View,
//   ImageBackground,
//   ScrollView,
//   TouchableNativeFeedbackBase,
// } from "react-native";
// import { TouchableRipple } from "react-native-paper";
// import Lottie from "lottie-react-native";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// export default function ParkingSpot_3() {
//   const navigation = useNavigation();

//   const [data, setData] = useState(USE);

//   const handleChange = (e) => {
//     let array = data.map((value, i) => {
//       console.log(value.key, e.target.innerHTML);
//       if (value.key === e.target.innerHTML) {
//         value.type = !value.type;
//       }
//       return value;
//     });
//     console.log(array, "array");
//     setData(array);
//   };

//   return (
//     <View style={styles.Frame236}>
//       <View style={styles.Frame237}>
//         <View style={styles.Frame235}>
//           <View style={styles.Group236}>
//             <View style={styles.Frame2372}>
//               <View style={styles.Frame220}>
//                 <View style={styles.Frame218}>
//                   <TouchableWithoutFeedback
//                     onPress={() => navigation.navigate("ParkingDetails")}
//                   >
//                     <Lottie
//                       source={require("./assets/arrow2.json")}
//                       autoPlay
//                       loop
//                       style={styles.Frame}
//                     />
//                   </TouchableWithoutFeedback>
//                   <Text style={styles.Txt3107}>Pick Parking Spot</Text>
//                 </View>
//               </View>
//               <View style={styles.Frame223}>
//                 <TouchableRipple
//                   style={styles.Group221}
//                   onPress={() => navigation.navigate("ParkingSpot_1")}
//                 >
//                   <Text style={styles.Txt3710}>1st Floor</Text>
//                 </TouchableRipple>
//                 <TouchableRipple
//                   style={styles.Group221}
//                   onPress={() => navigation.navigate("ParkingSpot_2")}
//                 >
//                   <Text style={styles.Txt3710}>2nd Floor</Text>
//                 </TouchableRipple>
//                 <TouchableRipple
//                   style={styles.Group220}
//                   onPress={() => navigation.navigate("ParkingSpot_3")}
//                 >
//                   <Text style={styles.Txt122}>3rd Floor</Text>
//                 </TouchableRipple>
//               </View>
//               <View style={styles.Group228}>
//                 <ImageBackground
//                   source={require("./images/grid.jpg")}
//                   style={styles.Group229}
//                 />
//                 <View style={styles.Group9510}>
//                   <View style={styles.Group867}>
//                     <Image
//                       style={
//                         styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21
//                       }
//                       source={{
//                         uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5092?alt=media&token=7454989e-04ab-48ec-9815-55e206667a53",
//                       }}
//                     />
//                     <TouchableRipple
//                       style={styles.Group2227}
//                       onPress={handleChange}
//                     >
//                       <Text style={styles.Txt4669}>C02</Text>
//                     </TouchableRipple>
//                   </View>
//                   <TouchableRipple
//                     style={styles.Group2225}
//                     onPress={handleChange}
//                   >
//                     <Text style={styles.Txt4469}>C03</Text>
//                   </TouchableRipple>
//                   <TouchableRipple
//                     style={styles.Group2226}
//                     onPress={handleChange}
//                   >
//                     <Text style={styles.Txt5597}>C05</Text>
//                   </TouchableRipple>
//                   <Image
//                     style={styles.Group880}
//                     source={{
//                       uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5091?alt=media&token=0a8301d0-f463-4d32-a8dd-d772be893a87",
//                     }}
//                   />
//                 </View>
//                 <Image
//                   style={
//                     styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf24
//                   }
//                   source={{
//                     uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5095?alt=media&token=00a522cf-4b56-4fdf-b7ff-2e3a393d1c59",
//                   }}
//                 />
//                 <Image
//                   style={
//                     styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf25
//                   }
//                   source={{
//                     uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5096?alt=media&token=eb6145e2-3c96-4d1a-a581-7339860ea08c",
//                   }}
//                 />
//                 <View style={styles.Group2281}>
//                   <ImageBackground
//                     source={require("./images/grid.jpg")}
//                     style={styles.Group229}
//                   />
//                   <View style={styles.Group9510}>
//                     <View style={styles.Group867}>
//                       <Image
//                         style={
//                           styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21
//                         }
//                         source={{
//                           uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5092?alt=media&token=7454989e-04ab-48ec-9815-55e206667a53",
//                         }}
//                       />
//                       <TouchableRipple
//                         style={styles.Group2227}
//                         onPress={handleChange}
//                       >
//                         <Text style={styles.Txt4669}>C08</Text>
//                       </TouchableRipple>
//                     </View>
//                     <TouchableRipple
//                       style={styles.Group2225}
//                       onPress={handleChange}
//                     >
//                       <Text style={styles.Txt4469}>C09</Text>
//                     </TouchableRipple>
//                     <TouchableRipple
//                       style={styles.Group22251}
//                       onPress={handleChange}
//                     >
//                       <Text style={styles.Txt4469}>C11</Text>
//                     </TouchableRipple>
//                   </View>
//                   <Image
//                     style={
//                       styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf24
//                     }
//                     source={{
//                       uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5095?alt=media&token=00a522cf-4b56-4fdf-b7ff-2e3a393d1c59",
//                     }}
//                   />
//                   <Image
//                     style={
//                       styles.KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf25
//                     }
//                     source={{
//                       uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-63%3A5096?alt=media&token=eb6145e2-3c96-4d1a-a581-7339860ea08c",
//                     }}
//                   />
//                 </View>
//                 <View style={styles.Frame224}>
//                   <Text style={styles.Txt351}>Continue</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Frame236: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//     // backgroundColor:'yellow'
//   },
//   Frame237: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   Frame235: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   Group236: {
//     paddingTop: 0,
//     paddingBottom: 31,
//     paddingLeft: 0,
//     paddingRight: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white",
//   },
//   Frame2372: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     // backgroundColor:'red',
//     transform: [{ translateY: 40 }],
//   },
//   Frame220: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     marginBottom: 16,
//     // backgroundColor:'green',
//   },
//   Frame218: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   Frame: {
//     width: 36,
//     height: 38,
//     marginRight: 19,
//     // backgroundColor:'pink'
//   },
//   Txt3107: {
//     fontSize: 29,
//     //   fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     lineHeight: 34,
//     color: "rgba(0,0,0,1)",
//     width: 282,
//   },

//   Frame223: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     // backgroundColor:'orange',
//     marginTop: "4%",
//   },
//   Group220: {
//     paddingTop: 5,
//     paddingBottom: 4,
//     paddingLeft: 18,
//     paddingRight: 21,
//     marginRight: 19,
//     borderRadius: 50,
//     backgroundColor: "rgba(9, 66, 139, 1)",
//     borderWidth: 2,
//     borderStyle: "solid",
//     borderColor: "rgba(9, 66, 139, 1)",
//     width: 111,
//     height: 37,
//   },
//   Txt122: {
//     fontSize: 16,
//     // fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(255, 255, 255, 1)",
//   },

//   Group221: {
//     paddingTop: 5,
//     paddingBottom: 4,
//     paddingLeft: 18,
//     paddingRight: 17,
//     marginRight: 19,
//     borderRadius: 50,
//     backgroundColor: "rgba(4,134,135,0.08)",
//     borderWidth: 2,
//     borderStyle: "solid",
//     borderColor: "rgba(9, 66, 139, 1)",
//     width: 111,
//     height: 37,
//   },
//   Txt3710: {
//     fontSize: 16,
//     //   fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(188,0,99,1)",
//   },

//   Group222: {
//     paddingTop: 5,
//     paddingBottom: 4,
//     paddingLeft: 20,
//     paddingRight: 18,
//     borderRadius: 50,
//     backgroundColor: "rgba(255, 255, 255, 1)",
//     borderWidth: 2,
//     borderStyle: "solid",
//     borderColor: "rgba(188,0,99,1)",
//     width: 111,
//     height: 37,
//   },
//   Txt3710: {
//     fontSize: 16,
//     // fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(9, 66, 139, 1)",
//   },

//   Frame2371: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginBottom: 16,
//     marginTop: "4%",
//   },
//   Frame237: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   Frame235: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   Frame224: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 128,
//     paddingRight: 128,
//     borderRadius: 50,
//     backgroundColor: "rgba(9, 66, 139, 1)",
//     top: "-151%",
//   },
//   Txt351: {
//     fontSize: 16,
//     //   fontFamily: "Montserrat, sans-serif",
//     fontWeight: "700",
//     color: "rgba(255, 255, 255, 1)",
//     textAlign: "center",
//     justifyContent: "center",
//   },

//   Group228: {
//     position: "relative",
//     backgroundColor: "white",
//     /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-492%3A54?alt=media&token=bf4bbbef-5ff6-4507-bb07-9bb167d876e5) */
//     width: "100%",
//     height: "100%",
//     //  top: '30%',
//     marginTop: "4%",
//   },
//   Group2281: {
//     position: "relative",
//     backgroundColor: "white",
//     /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-492%3A54?alt=media&token=bf4bbbef-5ff6-4507-bb07-9bb167d876e5) */
//     width: "100%",
//     height: "100%",
//     // top: '30%',
//     marginTop: "-60%",
//   },
//   Group229: {
//     position: "relative",
//     backgroundColor: "white",
//     /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s20zeq61yfn-492%3A54?alt=media&token=bf4bbbef-5ff6-4507-bb07-9bb167d876e5) */
//     width: "80%",
//     height: "56%",
//     // top: '30%',
//     transform: [{ translateX: 70 }],
//   },
//   Group9510: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     // top: '30%',
//     none: "0px",
//     width: "100%",
//     height: "100%",
//   },
//   Group867: {
//     display: "flex",
//     flexDirection: "row",
//     marginBottom: 26,
//   },
//   KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21: {
//     width: 107,
//     height: 56,
//     marginRight: 20,
//     transform: [{ translateX: 80 }, { translateY: 9 }],
//   },
//   Group2227: {
//     paddingTop: 6,
//     paddingBottom: 4,
//     paddingLeft: 34,
//     paddingRight: 32,
//     borderRadius: 10,
//     backgroundColor: "rgba(4,134,135,0.08)",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "rgba(9, 66, 139, 1)",
//     width: "26%",
//     height: "64%",
//     transform: [{ translateX: 80 }, { translateY: 20 }],
//   },
//   Txt4669: {
//     fontSize: 16,
//     // fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(9, 66, 139, 1)",
//   },

//   Group2225: {
//     paddingTop: 6,
//     paddingBottom: 4,
//     paddingLeft: 31,
//     paddingRight: 35,
//     marginBottom: 42,
//     borderRadius: 10,
//     backgroundColor: "rgba(4,134,135,0.08)",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "rgba(9, 66, 139, 1)",
//     width: "27%",
//     height: "4.25%",
//     transform: [{ translateX: 80 }, { translateY: 20 }],
//   },
//   Txt4469: {
//     fontSize: 16,
//     // fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(9, 66, 139, 1)",
//   },
//   Group22251: {
//     paddingTop: 6,
//     paddingBottom: 4,
//     paddingLeft: 31,
//     paddingRight: 35,
//     marginBottom: 42,
//     borderRadius: 10,
//     backgroundColor: "rgba(4,134,135,0.08)",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "rgba(9, 66, 139, 1)",
//     width: "27%",
//     height: "4.25%",
//     transform: [{ translateX: 80 }, { translateY: 40 }],
//   },
//   Group2226: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 25,
//     paddingRight: 20,
//     borderRadius: 10,
//     backgroundColor: "rgba(9, 66, 139, 1)",
//     width: 101,
//     height: 36,
//     transform: [{ translateX: 80 }, { translateY: 40 }],
//   },

//   Txt5597: {
//     fontSize: 16,
//     //    fontFamily: "Jost, sans-serif",
//     fontWeight: "600",
//     color: "rgba(255, 255, 255, 1)",
//     transform: [{ translateX: 8 }],
//   },
//   Group880: {
//     width: 12,
//     height: 12,
//   },

//   KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf24: {
//     position: "absolute",
//     top: 78,
//     // left: 231,
//     width: 107,
//     height: 56.32,
//     transform: [{ translateX: 200 }, { translateY: 15 }],
//   },
//   KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf25: {
//     position: "absolute",
//     top: 157,
//     // left: 231,
//     width: 107,
//     height: 56.32,
//     transform: [{ translateX: 200 }, { translateY: 35 }],
//   },
// });


import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Lottie from "lottie-react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { thirdFloor } from "./FloorSpot";
import { FlatGrid } from "react-native-super-grid";
import { TouchableRipple } from "react-native-paper";

export default function ParkingSpot_1() {
  const navigation = useNavigation();

  const [box, setBox] = useState();

  const [show, setShow] = useState(false);

  const [show_Hide, setShowHide] = useState(false);

  const [items, setItems] = React.useState(thirdFloor);

  const boxColored = (e) => {
    items.map((element, i) => {
      if (element.name === e._dispatchInstances.memoizedProps.children) {
        element.type = !element.type;
        setShow(element.type);

        // if(i === box){
        //   setBox()
        // }else {
        //   setBox(i)
        // }
      } else {
        element.type = false;
      }

      return element;
    });
    setShowHide(!show_Hide);
  };

  // const handleImage = () =>{
  //   if (show){
  //     return setShowHide(true)
  //   }
  // }

  return (
    <View style={styles.Frame236}>
      <View style={styles.Frame237}>
        <View style={styles.Frame235}>
          <View style={styles.Group236}>
            <View style={styles.Frame2372}>
              <View style={styles.Frame220}>
                <View style={styles.Frame218}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("ParkingDetails")}
                  >
                    <Lottie
                      source={require("./assets/arrow2.json")}
                      autoPlay
                      loop
                      style={styles.Frame}
                    />
                  </TouchableWithoutFeedback>
                  <Text style={styles.Txt3107}>Pick Parking Spot</Text>
                </View>
              </View>
              <View style={styles.Frame223}>
              <TouchableRipple
                   style={styles.Group221}
                   onPress={() => navigation.navigate("ParkingSpot_1")}
                 >
                   <Text style={styles.Txt3710}>1st Floor</Text>
                 </TouchableRipple>
                 <TouchableRipple
                   style={styles.Group221}
                   onPress={() => navigation.navigate("ParkingSpot_2")}
                 >
                   <Text style={styles.Txt3710}>2nd Floor</Text>
                 </TouchableRipple>
                 <TouchableRipple
                   style={styles.Group220}
                   onPress={() => navigation.navigate("ParkingSpot_3")}
                 >
                   <Text style={styles.Txt122}>3rd Floor</Text>
                 </TouchableRipple>
              </View>
              <View style={{ transform: [{ translateY: 25 }] }}>
                <FlatGrid
                  itemDimension={130}
                  data={items}
                  style={styles.gridView}
                  spacing={15}
                  renderItem={({ item, index }) => {
                    {
                      if (index % 2 === 1) {
                        return (
                          <View
                            style={[
                              item.type ? styles.Box : styles.itemContainer,
                            ]}
                          >
                            <TouchableOpacity>
                              {!item.type ? (
                                <Text
                                  style={styles.itemName}
                                  onPress={boxColored}
                                >
                                  {item.name}
                                </Text>
                              ) : (
                                <Text style={styles.itemName}>{item.name}</Text>
                              )}
                            </TouchableOpacity>
                            <View style={styles.horizontalLine}></View>
                          </View>
                        );
                      } else if (index % 2 === 0) {
                        return (
                          <View
                            style={[
                              item.type ? styles.Box1 : styles.itemContainer1,
                            ]}
                          >
                            <View style={styles.verticleLine}></View>
                            <TouchableOpacity>
                              {!item.type ? (
                                <Text
                                  style={styles.itemName}
                                  onPress={boxColored}
                                >
                                  {item.name}
                                </Text>
                              ) : (
                                <Text style={styles.itemName}>{item.name}</Text>
                              )}
                            </TouchableOpacity>
                            {/* {show && index === box ? 
         
          <View>
            <Image source={{uri: item.image}} style={{width: '100%', height: '100%'}} />
          </View>
          
        :
        <View></View>  
      
      } */}

                            <View style={styles.horizontalLine}></View>
                          </View>
                        );
                      }
                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.Frame224}>
              <Text style={styles.Txt351}>Continue</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    alignSelf: "center",
    // transform: [ {translateY:-110}]
    top: 23,
  },
  verticleLine: {
    position: "absolute",
    left: "-10%",
    top: "30%",
    height: "164%",
    width: "5%",
    backgroundColor: "#909090",
    transform: [{ translateX: -62 }],
  },
  gridView: {
    // marginTop: 10,
    flex: 1,
  },
  gridView1: {
    // marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    // paddingTop:60
    transform: [{ translateX: -140 }, { translateY: 10 }],
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
  itemContainer1: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    transform: [{ translateX: 250 }, { translateY: 10 }],
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  Frame236: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // backgroundColor:'yellow'
  },

  Frame235: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Group236: {
    paddingTop: 0,
    paddingBottom: 31,
    paddingLeft: 0,
    paddingRight: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  Frame2372: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor:'red',
    transform: [{ translateY: 40 }],
  },
  Frame220: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    // backgroundColor:'green',
  },
  Frame218: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Frame: {
    width: 36,
    height: 38,
    marginRight: 19,
    // backgroundColor:'pink'
  },
  Txt3107: {
    fontSize: 29,
    // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0,0,0,1)",
    width: 282,
  },

  Frame223: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    // backgroundColor:'orange',
    marginTop: "4%",
    marginRight: '-4%'
  },
  Group220: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 21,
    marginRight: 19,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt122: {
    fontSize: 16,
     // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  Group221: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 17,
    marginRight: 19,
    borderRadius: 50,
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },

  Group222: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 18,
    borderRadius: 50,
    backgroundColor: "rgba(4,134,135,0.08)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
    width: 111,
    height: 37,
  },
  Txt3710: {
    fontSize: 16,
     // fontFamily: "Jost, sans-serif",
    fontWeight: "600",
    color: "rgba(9, 66, 139, 1)",
  },

  Frame2371: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
    marginTop: "4%",
  },
  Frame237: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  Frame224: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 128,
    paddingRight: 128,
    borderRadius: 50,
    backgroundColor: "rgba(9, 66, 139, 1)",
    top: "-40%",
  },
  Txt351: {
    fontSize: 16,
    // fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  KisspngCarDoorHotelLyonExtensibleTableTopView5b4dd88fb6ecf21: {
    width: 107,
    height: 56,
    marginRight: 20,
    transform: [{ translateX: 80 }, { translateY: 9 }],
  },

  Box: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    // paddingTop:60
    transform: [{ translateX: -140 }, { translateY: 10 }],
    backgroundColor: "#7CF772",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },

  Box1: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 70,
    transform: [{ translateX: 250 }, { translateY: 10 }],
    backgroundColor: "#7CF772",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(9, 66, 139, 1)",
  },
});
