import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class CameraExample extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  cameraReverse = () => {
    this.setState(({ type }) => ({
      type: type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    }));
  }

  cameraShot = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.props.navigation.navigate('cameraPhoto', { source: photo });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 2 }} type={this.state.type} ref={(cam) => this.camera = cam}>
            <View
              style={{
                padding: 24,
                backgroundColor: 'rgba(0,0,0,.8)',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity onPress={this.cameraReverse}>
                <Ionicons name="md-reverse-camera" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'rgba(255,255,255,.7)',
                  borderRadius: 30,
                  borderWidth: 3,
                  borderColor: '#eee',

                }}
                onPress={this.cameraShot}
              >
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="md-photos" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}