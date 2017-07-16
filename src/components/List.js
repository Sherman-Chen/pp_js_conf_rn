import React, { Component } from 'react';
import { View, Dimensions, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Button } from './CommonComponents';

const list = require('./dataStore');

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: list.getVisit()
    }
    console.log(this.state.data);
    this.styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 15,
      borderBottomColor: '#d3d3d3',
      borderBottomWidth: 1
    },
    imageStyle: {
      width: 52,
      height: 37,
      marginBottom: 5,
      marginRight: 10
    }
  });
  }



  _renderItem = ({ item }) => {
    // const { containerStyle, imageStyle } = this.styles;
    return (
      <TouchableOpacity>
      <View style={this.styles.containerStyle}>
        <Image
          style={this.styles.imageStyle}
          resizeMode={Image.resizeMode.stretch}
          source={{
            uri:
              item.image_url
          }}
        />
        <Content size={13} color={'black'} weight="400">
          {item.name}
        </Content>
      </View>
    </TouchableOpacity>
    )
  }

  render () {
    return (
<View style={{ paddingTop: 30}}>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<Button onPress={() => {
  Actions.initial();
}}>
  {'<- Back'}
</Button>
<Content size={22} weight='700' > I Wanna Visit </Content>

</View>
<FlatList
        data={this.state.data}
        extraData={this.state}
        renderItem={this._renderItem}
      />
</View>
);
}
}

// export default List;
