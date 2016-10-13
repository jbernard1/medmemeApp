/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';
import * as d3 from 'd3'

let toast = function(message, type=ToastAndroid.SHORT){
  ToastAndroid.show(message, type)
}

class Logo extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: {uri: 'http://products.medmeme.com/images/global/login_logo.png'}
    }
  }
  render(){
    return(
      <View style={styles.appLogoContainer}>
        <Image resizeMode='contain' style={styles.appLogo} source={this.state.img} />
      </View>
    )
  }
}

class NewsSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      captions: this.getCaptions(),
      caption: {title: null, body: null, img: null}
    }
  }
  componentDidMount(){
    var index = 0;
    var seconds = 3;
    this.setSlide(index);

    var slider = setInterval(() => {
      index = (index == (this.state.captions.length - 1)) ? 0 : (index + 1);
      this.setSlide(index);
    }, seconds * 1000)
  }
  getCaptions(){
    return [{id: 1, title: 'App Demo', body: "This is a news slider caption", img: {}},
            {id: 2, title: 'Coming Soon', body: "This is another news slider caption", img: {}},
            {id: 3, title: 'IOS & Android', body: "Last news caption", img: {}}]
  }
  setSlide(index){
    this.setState({caption: this.state.captions[index]})
  }
  render(){
    return(
      <View style={styles.newsSlider}>
        <View style={styles.newsSliderCaption}>
          <View style={styles.captionTitle}>
            <Text style={styles.title}> {this.state.caption.title} </Text>
          </View>
          <View style={styles.captionBody}>
            <Text> {this.state.caption.body} </Text>
          </View>
        </View>
      </View>
    )
  }
}


class Plugin extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      name: null,
      img: null
    }
  }
  componentDidMount(){
    this.setState({id: this.props.id, name: this.props.name, img: this.getImage(this.props.name)})
  }
  getImage(name){
    var icon = (name == 'Tracker') ? name : name.toLowerCase();
    var img = {uri: `http://products.medmeme.com/images/icons/products/${icon}.png`}
    return img;
  }
  _onPressButton(){
    toast(`Loading ${this.state.name}`)
  }
  render(){
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <View style={styles.plugin} id={this.state.id}>
          <View style={styles.pluginIconContainer}>
              <Image resizeMode='contain' style={styles.pluginIcon} source={this.state.img}/>
          </View>
          <View style={styles.pluginLabelContainer}>
            <Text numberOfLines={1}  style={styles.pluginLabel}>
              {this.state.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

class PluginList extends Component {
  constructor(props){
    super(props);
    this.state = {
      plugins: this.getList()
    }
  }
  getList(){
    return [{id: 1, name: 'Scicom', img: ''}, {id: 2, name: 'Insightmeme', img: ''}, {id: 4, name: 'Profilememe', img: ''},
            {id: 1, name: 'Impactmeme', img: ''}, {id: 2, name: 'Conferencememe', img: ''}, {id: 4, name: 'Tracker', img: ''}]
  }
  render(){
    return(
      <View style={styles.pluginList}>
        <ScrollView>
          <View style={styles.row}>
            <Plugin id={this.state.plugins[0].id} name={this.state.plugins[0].name}/>
            <Plugin id={this.state.plugins[1].id} name={this.state.plugins[1].name}/>
            <Plugin id={this.state.plugins[2].id} name={this.state.plugins[2].name}/>
          </View>
          <View style={styles.row}>
            <Plugin id={this.state.plugins[3].id} name={this.state.plugins[3].name}/>
            <Plugin id={this.state.plugins[4].id} name={this.state.plugins[4].name}/>
            <Plugin id={this.state.plugins[5].id} name={this.state.plugins[5].name}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Logo />
          <NewsSlider />
        </View>
        <View style={styles.lowerHalf}>
          <PluginList />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  appLogoContainer: {
    borderColor: 'black',
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'rgba(34, 34, 34, .5)',
    paddingBottom: 10
  },
  appLogo: {
    flex: 1,
  },
  newsSlider: {
    flex: 4,
    borderBottomWidth: 2,
    borderColor: 'rgba(34, 34, 34, .5)',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  newsSliderCaption: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  captionTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  captionBody: {
    flex: 1
  },
  topHalf: {
    flex: 1,
  },
  lowerHalf: {
    flex: 1,
  },
  pluginList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  row: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  plugin: {
    borderWidth: 2,
    borderColor: 'rgba(34, 34, 34, .6)',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
    backgroundColor: '#34495e',
  },
  pluginIconContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(134, 134, 134, .5)'
  },
  pluginLabelContainer: {
    flex: 1,
    borderColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50'
  },
  pluginLabel: {
    flex: 1,
    color: 'whitesmoke'
  },
  pluginIcon: {
    width: 50,
    height: 50,
    borderColor: 'rgba(234,234,234,.8)',
    borderBottomWidth: 2,
    borderRadius: 10
  }
})

export default Home;
