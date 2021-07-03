import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import Icon from "@expo/vector-icons/Feather";

export default class PassengerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      source: "",
    };
  }
  reset = () => {
    this.setState({ source: "" });
  };
  componentDidMount = () => {
    this.reset();
  };
  search = (src1) => {
    const src = src1;
    this.setState({ source: "" });

    if (src !== "") {
      this.props.navigation.navigate("PassengerScreen", {
        source: src,
      });
    } else {
      Alert.alert("Please Enter a Starting Location");
      this.setState({ source: "" });
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <View>
            <Text style={{ textAlign: "center", fontSize: 30, marginTop: 30 }}>
              Trans Evo
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.search(this.state.source);
              }}
            >
              <Icon
                style={{ marginHorizontal: 10 }}
                name="search"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TextInput
              style={{ marginLeft: 10 }}
              placeholder="where are you?"
              keyboardType="email-address"
              onChangeText={(val) => {
                this.setState({
                  source: val,
                });
              }}
            />
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
