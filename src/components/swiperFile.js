import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ActivityIndicator,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated
} from 'react-native';

export default class Swiper extends Component {
  render() {
    return (
      <View>
        <Text>
          Starting Swiper
        </Text>
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
    height: Dimensions.get('window').height
  }
});
