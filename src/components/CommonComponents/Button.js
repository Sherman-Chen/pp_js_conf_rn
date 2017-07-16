import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Content from './Content';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
  <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
    <View style={textStyle}>
      <Content
      size={18}
      color='#fff'
      weight='700'
      >
      {props.children}
     </Content>
    </View>
  </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#00C5CD',
    borderRadius: 3,
    marginLeft: 25,
    marginRight: 25,
    shadowColor: '#79CDCD',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15
  }
};
export default Button;
