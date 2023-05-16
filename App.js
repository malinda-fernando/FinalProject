import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { colors } from './src/global/styles';
import SearchTrainScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import { ModalPortal } from 'react-native-modals';
import StackNavigator from './StackNavigator';
import { Provider } from "react-redux";
import store from './store';

export default function App(){
  return(
    <>
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
   <StackNavigator/>
    <ModalPortal/>
  </View>
  </Provider> 
  </>
  )}

const styles = StyleSheet.create({
  container: {flex:1}
})
