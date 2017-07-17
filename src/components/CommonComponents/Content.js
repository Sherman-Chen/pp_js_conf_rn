import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Content = ({ size, color, weight, children, lines, style }) => {
  const textStyle = [
    {
      fontSize: size || 10,
      fontWeight: weight,
      fontFamily: 'ChalkboardSE-Bold',
      textShadowColor: '#79CDCD',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      textAlign: 'center',
      color
    },
    StyleSheet.create(style)
  ];
  return (
    <Text style={textStyle} numberOfLines={lines}>
      {children}
    </Text>
  );
};

export default Content;
