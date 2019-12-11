/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {  StackNavigator } from 'react-navigation';

import CartScreen from './components/cartscreen';
import Welcome from './components/welcome';
import Summary from './components/summary';

class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="welcome" component = {Welcome} title='' />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App  = StackNavigator({
    Welcome: { screen: Welcome },
    CartScreen: { screen: CartScreen },
    Summary: { screen: Summary },
  });
