import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator, View, Dimensions, StyleSheet, Image, Animated, PanResponder } from 'react-native';
import { Card, ImageWrapper } from './ModalComponents';
import { Button, Content } from './CommonComponents';

const list = require('./dataStore');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * .25;

export default class YelpCard extends Component {

  constructor(props) {
    super(props);
    const position = new Animated.ValueXY({
      x: 0,
      y: 0
    });
    const fadeAnim = new Animated.Value(0);
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD){
          console.log('SWIPE Right');
          this.forceExit('right', this.props.swipeRight);
        } else if(gesture.dx < -SWIPE_THRESHOLD) {
          console.log('Swipe LEft');
          this.forceExit('left', this.props.swipeLeft);

        } else {
          this.resetPosition();
        }
      }
    });
    this.panResponder = panResponder;
    this.fadeAnim = fadeAnim;
    this.position = position;
   this.state = {
     data: this.props.data,
     index: 0
   };
}

  resetPosition() {
      Animated.spring(this.position, {
        toValue: { x: 0, y: 0}
      }).start();
  }

  swipeNext(direction) {
    if(direction === 'right') {
    list.addVisit(this.state.data[this.state.index]);
  } else {
    list.addNotVisit(this.state.data[this.state.index]);
  }
  if( this.state.index < this.state.data.length - 1) {
    console.log('This is the index', this.state.visited);
    this.position.setValue({
      x: 0,
      y: 0
    })
    this.fadeAnim.setValue(0);
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 250
    }).start();
    this.setState({
      index: this.state.index + 1
    })
  } else {
    Actions.list();
  }
}

  componentWillMount() {
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 250
    }).start();
  }

  forceExit(direction, onSwipe) {
    const toSwipe = direction === 'right' ? SCREEN_WIDTH + 20 : -SCREEN_WIDTH - 20;
    Animated.timing(this.position, {
      toValue: { x: toSwipe, y: 0 },
      duration: 250
    }).start(() => this.swipeNext(direction));
  }

   getCardStyle() {
     const rotate = this.position.x.interpolate({
       inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
       outputRange: ['-120deg', '0deg', '120deg']
     });
     return {
       ...this.position.getLayout(),
       transform: [{ rotate }],
       opacity: this.fadeAnim
     };
   }

   renderProduct() {
       return (
         <Animated.View
         style={this.getCardStyle()}
         {...this.panResponder.panHandlers}
         >
             <Card>
                 <ImageWrapper data={this.state.data[this.state.index]} />
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
    <Animated.View style={styles.backgroundStyle}>
    <Image
      style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      borderColor: 'black',
      borderWidth: 2,
      position: 'absolute',
      opacity: .6
       }}
      source={{uri: this.state.data[this.state.index].image_url}}
      />
  {this.renderProduct()}
  </Animated.View>
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
      opacity: this.fadeAnim
  }
});
