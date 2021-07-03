import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
import firebase from "firebase";
import db from "../config";
export default class DriverForm extends React.Component {
  constructor() {
    super();
    this.state = {
      plateNumber: "",
      source: "",
      phonenumber: "",
      destination: "",
      date: "",

      time: "",
      email: firebase.auth().currentUser.email,
    };
  }
  onsubmit = () => {
    if (
      this.state.email &&
      this.state.plateNumber &&
      this.state.source &&
      this.state.destination &&
      this.state.time &&
      this.state.date &&
      this.state.phonenumber
    ) {
      if (this.state.phonenumber.length >= 11) {
        db.collection("rides").add({
          email: this.state.email,
          plateNumber: this.state.plateNumber,
          source: this.state.source,
          destination: this.state.destination,
          date: this.state.date,
          time: this.state.time,
          phonenumber: this.state.phonenumber,
        });

        //add a contact number field
        Alert.alert("Ride Saved");
        this.setState({
          plateNumber: "",
          source: "",
          destination: " ",
          date: "",
          time: "",
          phonenumber: "",
        });
        this.props.navigation.navigate("Home");
      } else {
        Alert.alert("Please Enter Valid Mobile Number with Country Code");
      }
    } else {
      Alert.alert("Please Fill all the details");
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={{ textAlign: "center", fontSize: 30, marginTop: 50 }}>
            Trans Evo
          </Text>

          <Text style={{ textAlign: "center", fontSize: 24, marginTop: 20 }}>
            Ride Information
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 100,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="eg: rav 343"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  plateNumber: text,
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="Source"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  source: text,
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="Destination"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  destination: text,
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="dd/mm/yyyy"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  date: text,
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="hh:mm"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  time: text,
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TextInput
              style={{ textAlign: "center", fontSize: 20 }}
              placeholder="+44 5675 5678965"
              keyboardType="phone-pad"
              onChangeText={(text) => {
                this.setState({
                  phonenumber: text,
                });
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                borderWidth: 2,
                width: 150,
                marginTop: 30,
                height: 35,
                backgroundColor: "black",
                justifyContent: "center",
              }}
              onPress={() => {
                this.onsubmit();
              }}
            >
              <Text style={{ textAlign: "center", color: "#ffd" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
});
