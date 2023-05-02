import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import SearchTrainScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import { ModalPortal } from 'react-native-modals';

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
    <RootNavigator/>
    <ModalPortal/>
  </View>
  )}

const styles = StyleSheet.create({
  container: {flex:1}
})
