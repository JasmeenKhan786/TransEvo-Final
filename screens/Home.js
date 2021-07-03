import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import * as firebase from 'firebase'
import '@firebase/auth'


import db from '../config';


export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.container}>
        <View style={{ marginTop: 70 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'normal',
              textAlign: 'center',
              color: 'black',
            }}>
            Welcome to Tran Evo
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'normal',
              textAlign: 'center',
              marginTop: 20,
              color: 'black',
            }}>
            Hi There! 
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('PassengerForm')}>
            <Text style={styles.buttonText}>Passenger</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('DriverForm')}>
            <Text style={styles.buttonText}>Driver</Text>
          </TouchableOpacity>


           
           
            <Text style={{color:"black",fontSize:24,textAlign:'center',marginTop:80,borderWidth:2,borderRadius:10, width:200,alignSelf:'center',fontWeight:'normal'}}  onPress={() => {
              this.props.navigation.navigate('Login');
              firebase.auth().signOut()
            }}>Logout</Text>
    
        </View>

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
  button: {
    marginTop: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    borderColor:'#ffd'
  },

  buttonText: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#ffd',
    textAlign:'center'
  },
});

