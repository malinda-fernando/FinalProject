import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet} from "react-native";
import React from "react";
import { createNativeStackNavigator} from"@react-navigation/native-stack"


import WelcomeScreen from "./src/screens/authScreens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from './src/screens/SavedScreen';
import  BookingScreen from './src/screens/BookingScreen';
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";
import PlacesScreen from './src/screens/PlacesScreen';
import PropertyInfoScreen from  "./src/screens/PropertyInfoScreen";
import TrainScreen from "./src/screens/TrainScreen";
import UserScreen from "./src/screens/UserScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import SignUpScreen from "./src/screens/authScreens/SignUpScreen";
import SignInScreen from "./src/screens/authScreens/SignInScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
 
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false
          
        }}
      />

      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false
          
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false
         
        }}
      />

      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{
          headerShown: false
         
        }}
      />
      
      
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false
          
        }}
      />

      <Stack.Screen
        name="PlacesScreen"
        component={PlacesScreen}
        options={{
          headerShown: false
          
        }}

      />
      <Stack.Screen
        name="Info"
        component={PropertyInfoScreen}
      />
      <Stack.Screen
        name="Train"
        component={TrainScreen}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}

      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({})



