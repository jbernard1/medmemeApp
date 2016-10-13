import React, { Component} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Navigator,
  BackAndroid
} from 'react-native';
import {
  Home
} from '../components'

let listen;
let backCounter = 0;
let toast = function(message, type=ToastAndroid.SHORT){
  ToastAndroid.show(message, type)
}

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return null;
  },

};


var _navigator;

// Handles when android backbuton was clicked.
BackAndroid.addEventListener('hardwareBackPress', ()=>{
  var count = 0;
  // If we were listening already, stop.
  if(listen) clearInterval(listen);
  // Listen for 5 seconds
  listen = setInterval(function(){
    // If we reached 5 seconds
    if(count == 5){
      // Set backCounter to zero
      backCounter = 0;
      // Set seconds count to zero
      count = 0;
      // Stop this interval
      clearInterval(listen);
    }else{
      count++;
    }
  }, 1000)

  if(backCounter == 0){
    backCounter = 1;
    toast('Back button was clicked.');
    toast('Press again to quit medmeme app.', ToastAndroid.LONG)
    return true;
  }

  if(!_navigator){
    return false;
  }

  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});

class App extends Component {
  render(){
    return(
      <Navigator
        initialRoute={{id: 'home'}}
        renderScene={this.navigatorRenderScene}
      />
    )
  }
  navigatorRenderScene(route, navigator){
    switch (route.id) {
      case 'home':
        return(
          <Home navigator={navigator} />
        )
        break;
      default:
        // This will be a login page
        return(
          <Home navigator={navigator} />
        )
    }
  }
}

export default App;
