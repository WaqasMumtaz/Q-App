import * as React from 'react';
import { Text, View , StyleSheet,Button } from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Button onPress={()=>navigate('Company')}title="Are You Company"/>
         <Button title="Are You Finder"/>
      </View>
    )
  }
}

