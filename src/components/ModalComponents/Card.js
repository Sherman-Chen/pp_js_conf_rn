import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

// const width = (Dimensions.get('window').width * 20) / 375;


export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render () {
  return (
    <View style={styles.containerStyle}>
    {this.props.children}
   </View>
  );
}
};


const styles = {
  containerStyle: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
      width: Dimensions.get('window').width - 150 
  }

};

// export default Card;
