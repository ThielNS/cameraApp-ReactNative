import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Camera from './src/screens/camera';
import CameraPhoto from './src/screens/cameraPhoto';

const appNavigator = createStackNavigator({
  camera: {
    screen: Camera,
  },
  cameraPhoto: {
    screen: CameraPhoto,
  }
});

export default createAppContainer(appNavigator);