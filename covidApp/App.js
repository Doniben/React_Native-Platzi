/**
 * covid19 App 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Login from './src/screens/containers/login'
import Register from './src/screens/containers/register'
import PassRequest from './src/screens/containers/passwordRequest'
import HowTo from './src/screens/containers/howto'


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <HowTo />
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgb(45, 45, 68)',
      },
    },
  );


