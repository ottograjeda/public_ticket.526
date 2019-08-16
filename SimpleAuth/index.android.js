import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';

console.disableYellowBox = true; // disable warning regarding componentWillMount is deprecated and will be removed in the next major version

import App from './app/components/App'; // new = part of monorepo
AppRegistry.registerComponent('SimpleAuth', () => App);
