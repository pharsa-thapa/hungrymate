import { AppRegistry } from 'react-native';
import App from './App';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted is deprecated',
]);

AppRegistry.registerComponent('Assignment2', () => App);
