import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  Linking,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import db from "../config";

export default class PassengerScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  reset = () => {
    this.setState({ list: [] });
  };
  getlist = async () => {
    var source = this.props.navigation.getParam("source");
    var items = [];
    const rides = await db
      .collection("rides")
      .where("source", "==", source)
      .get();

    if (rides.docs.length > 0) {
      rides.docs.map((doc) => {
        items = this.state.list;
        items.push(doc.data());
        this.setState({ list: items });
      });
    } else {
      Alert.alert(
        "Sorry, No Rides available for this location. Try searching for another location"
      );
      this.props.navigation.navigate("PassengerForm");
    }
  };
  componentDidMount = () => {
    this.reset();
    this.getlist();
  };

  callDriver = (phone) => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      var num = phone;
      phoneNumber = "tel:${" + num + "}";
    } else {
      phoneNumber = "telprompt:${" + num + "}";
    }

    Linking.openURL(phoneNumber);
  };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg.png")}
      >
        <ScrollView>
          <Text style={{ fontSize: 30, textAlign: "center", marginTop: 40 }}>
            Trans Evo
          </Text>
          <Text style={{ marginTop: 20, fontSize: 20, textAlign: "center" }}>
            Available Rides in your area
          </Text>
          <View>
            {this.state.list.length > 0 ? (
              this.state.list.map((t, i) => {
                var phone = t.phonenumber;
                return (
                  <View
                    key={i.toString()}
                    style={{
                      borderWidth: 2,
                      width: 250,
                      paddingLeft: 10,
                      borderRadius: 20,
                      marginTop: 10,
                      borderColor: "white",
                      elevation: 2,
                      backgroundColor: "#808080",
                      alignItems: "center",
                      paddingVertical: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Email:{t.email}
                    </Text>
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Plate Number: {t.plateNumber}
                    </Text>
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Source: {t.source}
                    </Text>
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Destination: {t.destination}
                    </Text>
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Date: {t.date}
                    </Text>
                    <Text style={{ fontSize: 18, color: "black" }}>
                      Time: {t.time}
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        backgroundColor: "orange",
                        color: "black",
                        width: 100,
                        justifyContent: "center",
                        borderRadius: 5,
                        alignItems: "center",
                        padding: 2,
                      }}
                      onPress={() => {
                        this.callDriver(phone);
                      }}
                    >
                      Call Driver
                    </Text>
                  </View>
                );
              })
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 20,
                  textAlign: "center",
                  color: "black",
                }}
              >
                Fetching Rides
              </Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
