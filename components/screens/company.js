import * as React from 'react';
import { Text, View , StyleSheet,Button } from 'react-native';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


export default class Company extends React.Component {
  static navigationOptions = {
    title: 'Company',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>'Company'</Text>
         
      </View>
    )
  }
}
