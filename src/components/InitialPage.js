import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { View, TextInput, Dimensions } from 'react-native';
import { Button, Content } from './CommonComponents';

export default class InitialPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loaded: false,
      food: '',
      place: ''
    };
  }

  render() {
    const { container, textBox } = styles;

    return (
      <View style={container}>
        <Content weight="500" size={35} color="white">
          {' '}yINDER{' '}
        </Content>
        <Content weight="400" size={15} color="white">
          Please enter your preferences below.
        </Content>
        <TextInput
          style={textBox}
          onChangeText={food => this.setState({ food })}
          placeholder="What Food do you want?"
          placeholderTextColor="#008080"
          returnKeyType="done"
          numberOfLines={1}
          clearButtonMode="while-editing"
          value={this.state.id}
        />
        <TextInput
          style={textBox}
          onChangeText={place => this.setState({ place })}
          placeholder="Where do you want it?"
          placeholderTextColor="#008080"
          returnKeyType="done"
          numberOfLines={1}
          clearButtonMode="while-editing"
          value={this.state.password}
        />
        <Button
          onPress={() => {
            Actions.card({
              food: this.state.food,
              place: this.state.place
            });
          }}
        >
          Search
        </Button>
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
};
