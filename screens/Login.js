import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import * as firebase from 'firebase'
import '@firebase/auth'

import db from '../config';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  
  login = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            marginTop: 100,
            borderRadius: 250,
            width: 250,
            height: 250,
          }}></Image>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            width: 300,
            height: 40,
            marginHorizontal: 30,
            marginTop: 100,
          }}>
          <Icon
            style={{ marginHorizontal: 10 }}
            name="mail"
            size={24}
            color="black"
          />
          <TextInput
            style={{ marginLeft: 10 }}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            width: 300,
            height: 40,
            marginHorizontal: 30,
            marginTop: 25,
          }}>
          <Icon
            style={{ marginHorizontal: 10 }}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput
            secureTextEntry={true}
            style={{ marginLeft: 10 }}
            placeholder="Password"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginTop: 60,
            width: 100,
            height: 30,
            borderRadius: 10,
            justifyContent: 'center',
          }}
          onPress={()=>{
            this.login(this.state.emailId,this.state.password)
          }}>
          <Text style={{ color: '#ffd', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 40 }} onPress={()=>{
          this.props.navigation.navigate('SignUp')
        }}>New User? Create an Account</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
});
