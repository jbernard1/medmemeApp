'use strict'
import { ToastAndroid } from 'react-native'

let Toast = function(message, type=ToastAndroid.SHORT, gravity=null){
  console.log("Gravity Toast: ", gravity);
  if(!gravity) ToastAndroid.show(message, type)
  else ToastAndroid.showWithGravity("g+" + message, type, gravity);
}

export {
  Toast
};
