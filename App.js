/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Movie, MovieList} from './Movies.js';
import {PRODUCTS_DATA, BoatList} from './Boats.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Excercies</Text>
      <Movie />
      <MovieList />
      <BoatList />
    </ScrollView>
  );
};

export default App;
