import * as React from 'react';
import {
  View,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import * as firebase from 'firebase'
import '@firebase/auth'


import db from '../config';

export default class Loading extends React.Component {
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
       this.props.navigation.navigate('Home');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };

  componentDidMount = () => {
    this.checkIfLoggedIn();
  };

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:"black"}}>
        <ActivityIndicator animating={true} size="large" color="orange" />
      </View>
    );
  }
}
