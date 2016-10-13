import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native'
import {
  Home
} from '../components'

export default class Scicom extends Component {
  static get defaultProps(){
    return {
      title: 'Product'
    };
  }

  render(){
    return(
      <Home />
    )
  }
}
