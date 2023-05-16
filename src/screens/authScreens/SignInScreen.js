import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Alert, TouchableOpacity } from "react-native";
import { colors, parameters, title } from "../../global/styles"
import * as Animatable from "react-native-animatable"
import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import { auth } from "../../../firebase";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";



export default function SignInScreen() {

  const [TextInput2Fossued, setTextInput2Fossued] = useState(false)

  const TextInput1 = useRef(1)
  const TextInput2 = useRef(2)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
   

  const login = () => {
    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
       console.log("user credential", userCredential);
       const user = userCredential.user;
       console.log("user details", user);
       navigation.navigate("Main")
    })
}
 

const resetPassword=()=>{
  if(email!=null)
  {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    Alert.alert("password reset email has been sent successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage);
  });

  }
  else{
    Alert.alert("Please enter a valid email")
  }
}


  return (
    <View style={StyleSheet.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 20, }}>
        <Text style={title}> Sign-In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>We make your train journey </Text>
        <Text style={styles.text1}> as easy as possible</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput onChangeText={text => setEmail(text)} style={styles.TextInput1}
            placeholder="Email"
            ref={TextInput1}
            value={email}
          />
        </View>
      </View>
      <View style={styles.TextInput2}>
        <Animatable.View animation={TextInput2Fossued ? "" : "fadeInLeft"} duration={400}>
          <Icon
            name="lock"
            iconStyle={{ color: colors.grey2 }}
            type="material"
            style={{ marginRight: 10 }}
          />

        </Animatable.View>

        <TextInput onChangeText={text => setPassword(text)}
          style={{ width: "80%" }}
          placeholder="Password"
          secureTextEntry
          ref={TextInput2}
          value={password}
          onFocus={() => {
            setTextInput2Fossued(false)
          }}
          onBlur={() => {

            setTextInput2Fossued(true)
          }}
        />

        <Animatable.View animation={TextInput2Fossued ? "" : "fadeInLeft"} duration={400} >
          <Icon
            name="visibility-off"
            iconStyle={{ color: colors.grey2 }}
            type="material"
            style={{ marginRight: 10 }}
          />
        </Animatable.View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button

          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={login} />


      </View>

      <TouchableOpacity style={{ alignItems: "center", marginTop: 19 }}
      onPress={() => resetPassword()}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forgot Password ?</Text>
      </TouchableOpacity >
      <View style={{ alignItems: "center", marginTop: 12, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> OR</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 18 }}>
        <SocialIcon
          title=" Sign In with Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => { }}
        />

      </View>
      <View style={{ marginHorizontal: 20 }}>
        <SocialIcon
          title="Sign In with Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => { }} />
      </View>

      <View style={{ marginLeft: 29, marginTop: 15, fontWeight: "bold" }}>
        <Text style={{ ...styles.text1 }}>New on GoTrain ?</Text>
      </View>
      <View style={{ alignItems: "flex-end", marginHorizontal: 20, marginTop: 8 }}>
        <Button

          title="Create an Account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate("SignUpScreen")
          }} />
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text1: {
    color: colors.grey2,
    fontSize: 16
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    height: 50,
    paddingLeft: 15
  },

  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 50,
    paddingLeft: 15

  },

  SocialIcon: {
    borderRadius: 12,
    height: 50

  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1F41BB",
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: "#1F41BB",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3
  }

})