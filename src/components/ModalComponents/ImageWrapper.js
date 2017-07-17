// For spacing between components inside a Modal.

import React from 'react';
import { View, Image } from 'react-native';
import { Content } from '../CommonComponents';

const ImageWrapper = ({ data }) => {
  console.log(' i am ImageWrapper');
  const { image_url, price, name, is_closed, rating } = data;

  const textColor = is_closed ? 'red' : 'green';
  const isOpen = is_closed ? 'CLOSED' : 'OPEN';
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.containerStyle}>
        <Content font="HelveticaNeue" size={18} weight="700">
          {' '}{name}{' '}
        </Content>
        <Image
          style={{
            width: 120,
            height: 150,
            margin: 15,
            shadowColor: '#79CDCD',
            shadowOffset: { width: 1, height: 1 },
            shadowRadius: 1,
            shadowOpacity: 0.5,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderRadius: 3
          }}
          source={{ uri: image_url }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Content size={12} weight="400">
          {' '}Currently:{' '}
        </Content>
        <Content color={textColor} size={14} weight="400">
          {' '}{isOpen}{' '}
        </Content>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Content size={12} weight="400">
            {' '}Price{' '}
          </Content>
          <Content color="green" size={14} weight="400">
            {' '}{price}{' '}
          </Content>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Content size={12} weight="400">
            {' '}Rating{' '}
          </Content>
          <Content size={14} weight="400">
            {' '}{rating}{' '}
          </Content>
        </View>
      </View>
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
    paddingBottom: 5,
    margin: 10
  }
};

export default ImageWrapper;
