import React,{useState,useRef} from "react";

import { View, Text, StyleSheet, Dimensions,ImageBackground, TextInput, SafeAreaView } from "react-native";
import {colors, parameters, title} from "../../global/styles"
import * as Animatable from "react-native-animatable"
import {Icon, Button, SocialIcon} from 'react-native-elements'

import { Colors } from "react-native/Libraries/NewAppScreen";
const { height } = Dimensions.get("window");


export default function WelcomeScreen({navigation}){
    return(

        <SafeAreaView>
        <View >
        <ImageBackground
        style={{
            marginTop:20,
            height: height/ 2.3,
        }}

       
        source = {require("../../../assets/Screenshot_2023-03-21_004531-removebg-preview.png")} />
        <View 
        style={{
            paddingHorizontal: 4,
            paddingTop:4,
        }}>
             <Text style={{
                marginTop:30,
                fontSize:35,
                color:"#1F41BB",
                fontWeight:"bold",
                textAlign:"center"
                
             }}> Discover your life</Text>
        <Text
        style={{
            marginTop:5,
            fontSize:35,
            color:"#1F41BB",
            fontWeight:"bold",
            textAlign:"center"
        }}
        >Travel where you want </Text>
        <View style={{alignItems:"center", marginTop:30}}>
        <Text style={{
            color:colors.grey2,
            fontSize:16,
            fontWeight:"bold"
        }}>
            Make you unforgettable train travel
        </Text>
        <Text style={{
            color:colors.grey2,
            fontSize:16,
            fontWeight:"bold"
        }}>
           experience with us
        </Text>
        </View>

        <View style={{marginHorizontal:20, marginTop:30}}>
          <Button
          title="Sign In"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
            onPress ={()=>{
               navigation.navigate("SignInScreen")
            }}
          />
       </View>

         <View style={{marginHorizontal:20, marginTop:30}}>
          <Button
          title="Create an Account"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress ={()=>{
            navigation.navigate("SignUpScreen")
         }}
          />
         </View>
        
        </View>
        </View>
        </SafeAreaView>
    )


        
    

    
}