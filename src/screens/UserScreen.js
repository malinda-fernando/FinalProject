import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


const UserScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: true,
        title: "User Details",
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
        },
        headerStyle: {
            backgroundColor: "#1F41BB"



        },
    });
}, []);

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
    <View style={{padding:20}}>
        
        <View style={{flexDirection:"column" }}>
            <Text>First Name</Text>
            <TextInput value={firstName}
            onChangeText={(text) => setFirstName(text)} style={styles.TextInput1}/>
        </View>
        <View style={{flexDirection:"column" }}>
            <Text>Last Name</Text>
            <TextInput value={lastName}
            onChangeText={(text) => setLastName(text)} style={styles.TextInput1}/>
        </View>
        <View style={{flexDirection:"column" }}>
            <Text>Email</Text>
            <TextInput 
            value={email}
            onChangeText={(text) => setEmail(text)} style={styles.TextInput1}/>
        </View>
        <View style={{flexDirection:"column" }}>
            <Text>Phone Number</Text>
            <TextInput value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)} style={styles.TextInput1}/>
        </View>
    </View>
     <Pressable
     style={{
       backgroundColor: "white",
       marginTop: "auto",
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       marginBottom: 40,
       padding: 10,
     }}
   >
     <View>
       <View
         style={{
           flexDirection: "row",
           alignItems: "center",
           marginTop: 4,
           gap: 8,
         }}
       >
         <Text
           style={{
             color: "red",
             fontSize: 20,
             textDecorationLine: "line-through",
             marginLeft:5
           }}
         >
           Rs {(route.params.oldPrice) *((route.params.adults) + (route.params.children))}
         </Text>
         <Text style={{ fontSize: 20, marginLeft:10 }}>
         Rs {(route.params.newPrice) * ((route.params.adults) + (route.params.children))}
         </Text>
       </View>
       <Text>
         You Saved {route.params.oldPrice - route.params.newPrice} rupees
       </Text>
     </View>
     <Pressable
       onPress={() => navigation.navigate("Confirmation",{
              oldPrice: route.params.oldPrice,
              newPrice: route.params. nPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              distance: route.params.distance,
             selectedDate: route.params.selectedDate,
       })}
       style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
     >
       <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
         Confirm
       </Text>
     </Pressable>
   </Pressable>
 </>

  
    
  );
};

export default UserScreen

const styles = StyleSheet.create({
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 10,
        borderRadius: 12,
        marginBottom: 20,
        height: 50,
        paddingLeft: 15,
        marginTop:10
      },
})