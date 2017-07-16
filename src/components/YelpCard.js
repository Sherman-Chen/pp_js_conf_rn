import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator, View, Dimensions, StyleSheet, Image, Animated, PanResponder } from 'react-native';
import { Card, ImageWrapper } from './ModalComponents';
import { Button, Content } from './CommonComponents';

const cart = require('./dataStore');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * .5;

export default class YelpCard extends Component {

  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // console.log(gesture);
        position.setValue({ x: gesture.dx });
      },
      onPanResponderRelease: (event, gesture) => {
        // console.log(position.x._value)
        if (gesture.dx > SWIPE_THRESHOLD){
          console.log('SWIPE Right');
          this.forceExitRight();
          // this.props.swipeRight();
        } else if(gesture.dx < -SWIPE_THRESHOLD) {
          console.log('Swipe LEft');
          this.forceExitLeft();
          this.props.swipeLeft();
        } else {
          this.resetPosition();
        }
      }
    });
    this.panResponder = panResponder;
    this.position = position;
   this.state = {
     data: this.props.data,
     img: this.props.data.image_url,
   };
}

  resetPosition() {
      Animated.spring(this.position, {
        toValue: { x: 0, y: 0}
      }).start();
  }

  forceExitRight() {
    Animated.timing(this.position, {
      toValue: { x: SCREEN_WIDTH + 20, y: 0 },
      duration: 250
    }).start();
  }

  forceExitLeft() {
    Animated.timing(this.position, {
      toValue: { x: -SCREEN_WIDTH - 20, y: 0 },
      duration: 250
    }).start();
  }

   componentWillMount() {
      console.log('I am in the card:', this.props)
   }

   getCardStyle() {
     const rotate = this.position.x.interpolate({
       inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
       outputRange: ['-120deg', '0deg', '120deg']
     });
     return {
       ...this.position.getLayout(),
       transform: [{ rotate }]
     };
   }

   renderProduct() {
       return (
         <Animated.View
         style={this.getCardStyle()}
         {...this.panResponder.panHandlers}
         >
             <Card>
                 <ImageWrapper data={this.state.data} />
                 <Button
                 onPress={() => {
                   this.setState({ visible: !this.state.visible });
                   Actions.input({type: 'reset'});
                 }}
                 >Cancel</Button>
             </Card>
           </Animated.View>
       );
   }

   render() {
  return (
    <View style={styles.backgroundStyle}>
    <Image
      style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderColor: 'black',
      borderWidth: 2,
      position: 'absolute',
      opacity: .6
       }}
      source={{uri: this.state.img}}
      />
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
