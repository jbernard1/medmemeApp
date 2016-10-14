'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';
import { Toast } from './helpers'
import * as d3 from 'd3'

class Scicom extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                title="Scicomm"
                navIcon={require('../images/products/scicom.png')}
                onIconClicked={this.props.navigator.pop}
                titleColor={'#FFFFFF'}/>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Scicom;
