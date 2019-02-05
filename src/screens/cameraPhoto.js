import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

class cameraPhoto extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent: true, 
  };

  render() {
    const  { state: { params }} = this.props.navigation;
    return (
      <View>
        <Image
          source={{ uri: params.source.uri }}
          style={{ width: Dimensions.get('screen').width,  height: Dimensions.get('screen').height, backgroundColor: '#000', }}
          resizeMode="contain" />
      </View>
    );
  }
}

export default cameraPhoto;