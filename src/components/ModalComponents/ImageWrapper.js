// For spacing between components inside a Modal.

import React from 'react';
import { View, Image } from 'react-native';
import { Content } from '../CommonComponents';

const ImageWrapper = ({ data }) => {
  console.log(' i am ImageWrapper');
const {
  image_url,
  price,
  name
} = data;
  return (
      <View style={styles.containerStyle}>
      <Image
        style={{width: 120, height: 150, margin: 15,
        shadowColor: '#79CDCD',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderRadius: 3
        }}
        source={{uri: image_url}}
        />

        <Content font='HelveticaNeue' size={15} weight='700'> {name} </Content>
      </View>
    );
  };

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    paddingBottom: 15,
    margin: 10
  }
};

export default ImageWrapper;
