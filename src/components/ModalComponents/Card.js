import React, { Component } from 'react';
import { View, Dimensions, Animated, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width - (Dimensions.get('window').width * (150/414));
const height = (Dimensions.get('window').height * (390/736));

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(Dimensions.get('window').width);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

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
    width,
  }
};

// export default Card;
