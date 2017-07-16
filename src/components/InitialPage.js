import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { View, TextInput, Dimensions } from 'react-native';
import { CardSection } from './ModalComponents';
import { Button, Content } from './CommonComponents';
// import yelpSearch from '../../../utils/service';
// import { Footer, Policy } from './DescText';


export default class InitialPage extends Component {

  constructor() {
    super();
   this.state = {
     visible: false,
     loaded: false,
     id: '',
     password: ''
   };
  }

   render() {
     const {
       container,
       textBox
     } = styles;
  return (
  <View style={container}>
      <Content weight='500' size={35} color='white'> y-Box </Content>
      <Content weight='400' size={15} color='white'>
      Please enter your preferences below.
      </Content>
      <TextInput
        style={textBox}
        onChangeText={(id) => this.setState({ id })}
        placeholder='What Food do you want?'
        placeholderTextColor="#008080"
        returnKeyType='done'
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.id}
      />
      <TextInput
        style={textBox}
        onChangeText={(password) => this.setState({ password })}
        placeholder='Where do you want it?'
        placeholderTextColor="#008080"
        returnKeyType='done'
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.password}
      />
      <CardSection>
      <Button onPress={() => {
        // console.log(yelpSearch);
       }}> Search </Button>
      </CardSection>
  </View>
  );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00EEEE',
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 150
  },
  textBox: {
    height: 40,
    backgroundColor: '#E0FFFF',
    borderColor: '#79CDCD',
    borderWidth: 0.3,
    borderRadius: 10,
    shadowColor: '#79CDCD',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    width: Dimensions.get('window').width - 60,
    marginHorizontal: 30,
    marginVertical: 15,
    textAlign: 'center'
  }
}
