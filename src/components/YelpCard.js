import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity
} from 'react-native';
import { Card, ImageWrapper, Details } from './ModalComponents';
import { Button, Content } from './CommonComponents';

const list = require('./dataStore');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default class YelpCard extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY({
      x: 0,
      y: 0
    });
    const fadeAnim = new Animated.Value(0);
    const animatedValue = new Animated.Value(1);
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          console.log('SWIPE Right');
          this.forceExit('right', this.props.swipeRight);
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          console.log('Swipe LEft');
          this.forceExit('left', this.props.swipeLeft);
        } else {
          this.resetPosition();
        }
      }
    });
    this.panResponder = panResponder;
    this.animatedValue = animatedValue;
    this.fadeAnim = fadeAnim;
    this.position = position;
    this.state = {
      data: this.props.data,
      index: 0,
      isFlipped: true
    };
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  swipeNext(direction) {
    if (direction === 'right') {
      list.addVisit(this.state.data[this.state.index]);
    } else {
      list.addNotVisit(this.state.data[this.state.index]);
    }
    if (this.state.index < this.state.data.length - 1) {
      console.log('This is the index', this.state.visited);
      this.position.setValue({
        x: 0,
        y: 0
      });
      this.fadeAnim.setValue(0);
      Animated.timing(this.fadeAnim, {
        toValue: 1,
        duration: 250
      }).start();
      this.setState({
        index: this.state.index + 1,
        isFlipped: true
      });
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
    const toSwipe =
      direction === 'right' ? SCREEN_WIDTH + 20 : -SCREEN_WIDTH - 20;
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
  _flipToggleCard() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.isFlipped !== prevState.isFlipped) {
      this.animatedValue.setValue(0);
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 250
      }).start();
    }
  }

  renderProduct() {
    return (
      <Animated.View
        style={this.getCardStyle()}
        {...this.panResponder.panHandlers}
      >
        <Card>
          {this.returnFace()}
        </Card>
      </Animated.View>
    );
  }

  returnFace() {
    const rotateVertical = this.animatedValue;
    if (this.state.isFlipped) {
      return (
        <Animated.View style={{ opacity: rotateVertical }}>
          <ImageWrapper data={this.state.data[this.state.index]} />
          <Button
            onPress={() => {
              this.setState({ isFlipped: !this.state.isFlipped });
            }}
          >
            More Details
          </Button>
        </Animated.View>
      );
    } else {
      return (
        <Animated.View style={{ opacity: rotateVertical }}>
          <Details data={this.state.data[this.state.index]} />
          <Button
            onPress={() => {
              this.setState({ isFlipped: !this.state.isFlipped });
            }}
          >
            Back
          </Button>
        </Animated.View>
      );
    }
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
            opacity: 0.6
          }}
          source={{ uri: this.state.data[this.state.index].image_url }}
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
