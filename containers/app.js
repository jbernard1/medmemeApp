import React, { Component} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Navigator,
  BackAndroid,
  RCTDeviceEventEmitter
} from 'react-native';
import * as components from '../components';

var {
  Home,
  Scicom
} = components
var componentList = Object.keys(components);

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

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});


class App extends Component {
  render(){
    return(
      <Navigator
        initialRoute={{id: 'Home'}}
        renderScene={this.navigatorRenderScene}
      />
    )
  }
  navigatorRenderScene(route, navigator){
    var id = route.id;
    console.log("Components", Object.keys(components));
    if(componentList.indexOf(id) == -1){
      toast(`${id} is currently not available`, gravity=ToastAndroid.CENTER);
    }else if(id != 'Home'){
      toast(`Loading ${id} plugin`);
    }

    _navigator = navigator;
    switch (route.id.toLowerCase()) {
      case 'home':
        return(
          <Home navigator={navigator} />
        )
        break;
      case 'scicom':
        return(
          <Scicom navigator={navigator} />
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
