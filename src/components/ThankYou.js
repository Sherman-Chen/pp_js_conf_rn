import React from 'react';
import { View, Dimensions } from 'react-native';
import { Content } from './CommonComponents';

const ThankYou = () =>
<View
style={{
  paddingTop: Dimensions.get('window').width / 2,
  justifyContent: 'center',
  alignItems: 'center'
}}
>
  <Content size={45} weight='500' color='#1072B7'>
  Thank You!
  </Content>
  <Content size={25} weight='700' color='#1072B7'>
  Pay<Content size={25} weight='700' color='#1072B2'>
  Pal
  </Content>
  </Content>
</View>
;

export default ThankYou;
