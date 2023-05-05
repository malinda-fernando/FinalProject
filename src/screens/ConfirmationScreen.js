import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ConfirmationScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking",
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
  return (
    <View>
      <Pressable style={{backgroundColor:"white", margin:10}}>
      <View>
                    <View style={{marginHorizontal:12}}>
                        <Text style={{fontSize:17, fontWeight:"bold"}}>{route.params.name}</Text>
                        <View >
          <MaterialCommunityIcons style={{ marginLeft: 10, marginTop: 20 }} name="map-marker-distance" size={20} color="black" />
          <Text style={{ marginLeft: 55,color:"white", backgroundColor: "#1F41BB", borderRadius: 5, paddingVertical: 5,paddingHorizontal:20, flexDirection:"row", alignItems:"center",marginTop:-28, width:260 }}> {route.params.distance} </Text>
        </View>
                    </View>
                </View>
                <View style={{margin:12 }}>
            <View>
                <Text style={{fontSize:16, fontWeight:"600", marginBottom:3}}>Departure Date</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:10}}>{route.params.selectedDate}</Text>
                </View>
                <View>
                <Text style={{fontSize:16,fontWeight:"600", marginBottom:3}}>Passenger Count</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:28}}>
                {route.params.adults} adults {route.params.children} children 
                </Text>
            </View>
            </View>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen

const styles = StyleSheet.create({})