import React from 'react';
import { View, Image } from 'react-native';
import { Content } from '../CommonComponents';

const Details = ({ data }) => {
  console.log(' i am Details');
  const { image_url, price, name, is_closed, rating, location, display_phone, review_count } = data;

  const textColor = is_closed ? 'red' : 'green';
  const isOpen = is_closed ? 'CLOSED' : 'OPEN';
  return (
    <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={styles.containerStyle}>
        <Content font="HelveticaNeue" size={18} weight="700">
          {' '}{name}{' '}
        </Content>
        <Content size={12} weight="400">
          {' '}{`${location.display_address[0]}, ${location.display_address[1]}`}{' '}
        </Content>
      </View>
      <View style={[styles.containerStyle, { flexDirection: 'row' }]}>
        <Content size={12} weight="400">
          {' '}Currently:{' '}
        </Content>
        <Content color={textColor} size={14} weight="400">
          {' '}{isOpen}{' '}
        </Content>
      </View>
      <View style={[styles.containerStyle, { flexDirection: 'row' }]}>
        <Content size={14} weight="400">
          {' '}Phone #:{' '}
        </Content>
        <Content color={textColor} size={16} weight="400">
          {' '}{display_phone}{' '}
        </Content>
      </View>
      <View style={[styles.containerStyle, { flexDirection: 'row' }]}>
        <Content size={14} weight="400">
          {' '}Review Count:{' '}
        </Content>
        <Content color={textColor} size={16} weight="400">
          {' '}{review_count}{' '}
        </Content>
      </View>
      <View style={[styles.containerStyle, { flexDirection: 'row' }]}>
        <View style={styles.containerStyle}>
          <Content size={14} weight="400">
            {' '}Price{' '}
          </Content>
          <Content color="green" size={16} weight="400">
            {' '}{price}{' '}
          </Content>
        </View>
        <View style={styles.containerStyle}>
          <Content size={14} weight="400">
            {' '}Rating{' '}
          </Content>
          <Content size={16} weight="400">
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
    padding: 10,
    marginHorizontal: 10
  }
};

export default Details;
