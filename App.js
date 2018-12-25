import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Constants  } from 'expo';
//import {StackNavigator} from 'react-navigation';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Facebooklogin from './components/screens/login';
import HomeScreen from './components/screens/home';
import Company from './components/screens/company';
//import firebase from './components/config/firebase';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';


  
  const RootNavigation = createStackNavigator({
    Main:{
      screen:Facebooklogin,
    },
    Home:{
      screen:HomeScreen,
    },
    Company:{
      screen:Company,
    }
  });
  const App = createAppContainer(RootNavigation)
  export default App ;

  
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
