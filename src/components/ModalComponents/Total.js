import React from 'react';
import { View, Dimensions } from 'react-native';
import { Content, Arrow } from '../CommonComponents';

const width = Dimensions.get('window').width - ((Dimensions.get('window').width * 80) / 375);
const textWidth = (200 * width) / 295;
const totalWidth = (95 * width) / 295;

const Total = ({ value, currency }) => {
  const {
    containerStyle,
    textContainer,
    total
  } = styles;
  return (

    <View style={containerStyle}>
      <View style={textContainer}>
        <Content weight='700'> Total </Content>
      </View>
      <View style={total}>
      <Content weight='700' lines={1}>{currency}{value}</Content>
      </View>
    <Arrow />
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F7F9FA',
    height: 40
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 25,
    width: textWidth
  },
  total: {
   justifyContent: 'center',
   alignItems: 'flex-end',
   width: totalWidth
  }
};
export default Total;
