import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Alert
} from 'react-native';

import Icon from '@expo/vector-icons/Entypo';
import * as firebase from 'firebase'
import '@firebase/auth'


import db from '../config';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      confirmpassword: '',
      mobilenumber: '',
      secureTextEntry: true,
    };
  }

    signup = async (email, password, confirmpwd, number) => {

      if(password === confirmpwd && number.length >=11){

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
       
        db.collection('users').add({
          email: email,
          password: password,
          mobilenumber: this.state.mobilenumber,
        });
        Alert.alert("Account Created")
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      });

      }
      else{
        if(password !== confirmpwd){
          Alert.alert("Passwords Don't Match")
        }
        else if(number<=10){
          Alert.alert("Please Enter a Valid Mobile Number with Country Code")
        }
       
      }
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.container}>
        <Text style={{textAlign:'center',marginTop:150,fontSize:24, fontWeight:'bold'}}> Sign Up to Trans Evo</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            width: 300,
            height: 40,
            marginHorizontal: 30,
            marginTop: 60,
          }}>
          <Icon
            style={{ marginHorizontal: 10 }}
            name="mail"
            size={24}
            color="black"
          />
          <TextInput
            style={{ marginLeft: 10, width: 200 }}
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
            style={{ marginLeft: 10, width: 200 }}
            placeholder="Password"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                password: text,
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
            marginTop: 30,
          }}>
          <Icon
            style={{ marginHorizontal: 10 }}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput
            secureTextEntry={true}
            style={{ marginLeft: 10,color:"black", width: 200 }}
            placeholder="Confirm Password"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                confirmpassword: text,
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
            marginTop: 30,
          }}>
          <Icon
            style={{ marginHorizontal: 10 }}
            name="phone"
            size={24}
            color="black"
          />
          <TextInput
            style={{ marginLeft: 10, width: 200 }}
            placeholder="e.g. +91 XXX-XXX-XXX-X"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                mobilenumber: text,
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
            this.signup(this.state.emailId,this.state.password, this.state.confirmpassword, this.state.mobilenumber)
          }}>
          <Text style={{ color: '#ffd', textAlign: 'center' }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 40 }} onPress={()=>{
          this.props.navigation.navigate('Login');
        }}>Have an Account? Login</Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
