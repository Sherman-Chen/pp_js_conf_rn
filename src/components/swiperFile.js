import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator, View, Dimensions, StyleSheet } from 'react-native';
import YelpCard from './YelpCard';

const cart = require('./dataStore');

export default class Swiper extends Component {

  constructor(props) {
    super(props);
   this.state = {
     visible: false,
     data: []
   };
  }

  renderCards() {
      console.log('I am returning the cards',data);
  }

  getProduct(food, place) {
    console.log(food, place);
    axios.post('https://morning-hamlet-88026.herokuapp.com', {
   food: food,
   location: place
 })
  .then(response => {
    this.response = response;
    this.setState({
       visible: !this.state.visible,
       data: response.data
     });
     console.log(this.state.data);

  });
  }

  swipeRight() {
    this.state.data.shift();
    console.log(this.state.data);
    this.setState({
      data: this.state.data
    })
  }
  swipeLeft() {
    let newData = this.state.data;
    newData.shift();

    this.setState({
      data: newData
    })
  console.log(this.state.data);
  }

   componentWillMount() {
     console.log(this.props);
       this.getProduct(this.props.food, this.props.place);

   }

   renderProduct() {
     if(!this.state.visible) {
       return (
         <View>
         <ActivityIndicator
           animating={!this.state.visible}
           color="blue"
           size="large"
           />
           </View>
       );
     } else {
            console.log('Rendering the yelp card', this.state);
           return <YelpCard data={this.state.data[0]} swipeRight={this.swipeRight.bind(this)} swipeLeft={this.swipeLeft.bind(this)} />;
     }
   }

   render() {
  return (
    <View style={styles.backgroundStyle}>
  {this.renderProduct()}
  </View>
  );
  }
}

const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  }
});
