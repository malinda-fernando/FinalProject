import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

const BookingScreen = () => {

  const bookings =useSelector ((state) => state.booking.booking);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: true,
        title: " My Booking",
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
  console.log(bookings)
  return (
    <SafeAreaView>
          {bookings.length > 0 && bookings.map((item) => (
        <Pressable
          style={{
            backgroundColor: "white",
            marginVertical:10,
            marginHorizontal:20,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            padding: 14,
            borderRadius: 6,
          }}
        >
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
             <Text style={{fontSize:16, fontWeight:"600"}}>Price for Destination: </Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400"  }}>
               Rs {item.newPrice}
              </Text>
             
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontSize:16, fontWeight:"600", marginBottom:3, marginTop:8}}>Departure Date</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:10}}> {item.selectedDate}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontSize:16, fontWeight:"600", marginBottom:3, marginTop:8}}>Train Id:</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:10}}> {item.id}</Text>
                </View>
               
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})