import React, { Component } from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Navigator
} from 'react-native';
import Scene from './scene';

let toast = function(message, type=ToastAndroid.SHORT){
  ToastAndroid.show(message, type)
}

class App extends Component {
  render(){
    return(
      <Navigator
        initialRoute={{title: 'Home', index: 0}}
        renderScene={(route, navigatory) => {
          return(
            <Scene title={route.title} />
          )
        }}
      />
    )
  }
}

export default App;
