import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import firebase from '../config/firebase';

var db = firebase.auth();
export default class Facebooklogin extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  constructor(props) {
    console.log(props);
    super(props);

    this.state = {};
    this.goToHomePage = this.goToHomePage.bind(this);
  }
  goToHomePage() {
    const { navigate } = this.props.navigation;
    () => {
      navigate('Home');
    };
  }
  componentDidMount() {
    db.onAuthStateChanged(user => {
      if (user !== null) {
        console.log(user);
      }
    });
  }

  async logIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync(
        '2029695937078064',
        {
          permissions: ['public_profile'],
        }
      );
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        // const credential =firebase.auth.FacebookAuthProvider.credential(token)
        // db.signInWithCredential(credential).catch(error =>{console.log(error)})
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate);
    return (
      <View style={styles.container}>
        <Button onPress={this.logIn.bind(this)} title="Login With Facebook" />
        <Button onPress={() => navigate('Home')} title="Go To Home" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
