import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { pixelNormalize } from '../components/Normalise';

const PropertyInfoScreen = ({ }) => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log(route.params)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
            },
            headerStyle: {
                backgroundColor: "#1F41BB",



            },
        });
    }, []);
    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
   

    return (
        <SafeAreaView>

            <ScrollView>
                <Pressable style={{ flexDirection:"row", flexWrap:"wrap", margin:5 }} >
                    {route.params.photos.slice(0, 5).map((photo,index) => (
                            <View style={{ margin: 6 }} key={photo.id} >
                                <Image
                               key={photo.id}
                                    style={{
                                        width: 110,
                                        height: pixelNormalize(80),
                                        borderRadius: pixelNormalize(4),
                                    }}
                                    source={{uri:photo.image }}
                                />
                            </View>
                        )) }
                   
                    <Pressable style={{ alignItems:"center",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",marginLeft:20}}>Show more </Text>
                    </Pressable>
                </Pressable>
                <View>
                    <View style={{marginHorizontal:12}}>
                        <Text style={{fontSize:17, fontWeight:"bold"}}>{route.params.name}</Text>
                        <View >
          <MaterialCommunityIcons style={{ marginLeft: 10, marginTop: 20 }} name="map-marker-distance" size={20} color="black" />
          <Text style={{ marginLeft: 55,color:"white", backgroundColor: "#1F41BB", borderRadius: 5, paddingVertical: 5,paddingHorizontal:20, flexDirection:"row", alignItems:"center",marginTop:-28, width:260 }}> {route.params.distance} </Text>
        </View>
                    </View>
                </View>
           <Text style={{borderColor:"#E0E0E0", borderWidth:3, height:1, marginTop:10}}/>
           <Text style={{ marginTop: 10, fontSize: 13, fontWeight: "500", marginLeft:8 }}>Price for Destination</Text>
           <View style={{ marginTop: 8, alignItems: "center", gap: 8, flexDirection:"row", marginHorizontal:9 }}>
           <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              Rs {(route.params.oldPrice) *((route.params.adults) + (route.params.children))}
            </Text>
            <Text style={{ fontSize: 20, marginLeft:10 }}>
              Rs {(route.params.newPrice) * ((route.params.adults) + (route.params.children))}
            </Text>
          </View>
             <View
            style={{
              marginHorizontal: 12,
             
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>
        </View>
        <Text style={{borderColor:"#E0E0E0", borderWidth:3, height:1, marginTop:10}}/>
        <View style={{margin:12, flexDirection:"row",alignItems:"center",gap:60}}>
            <View>
                <Text style={{fontSize:16, fontWeight:"600", marginBottom:3}}>Departure Date</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:10}}>{route.params.selectedDate}</Text>
                </View>
                <View>
                <Text style={{fontSize:16,fontWeight:"600", marginBottom:3, marginHorizontal:28}}>Passenger Count</Text>
                <Text style={{fontSize:15, fontWeight:"bold", color:"#007FFF", marginHorizontal:28}}>
                {route.params.adults} adults {route.params.children} children </Text>
            </View>
            </View>

        
        <Text style={{borderColor:"#E0E0E0", borderWidth:3, height:1, marginTop:10}}/> 

            </ScrollView>
           
          <Pressable
      onPress={() => navigation.navigate("Train",{
        trains:route.params.availabletrains,
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        distance:route.params.distance,
        selectedDate: route.params.selectedDate,
        departureTime:route.params.departureTime ,
        arrivalTime:route.params.arrivalTime
       
      })}
        style={{
          backgroundColor: "#1F41BB",
         
          borderRadius: 10,
          bottom: 20,
          padding: 15,
          width:"95%",
          marginHorizontal:10,
          marginTop:93
        }}
      >
        <Text style={{ textAlign: "center", color: "white",fontWeight:"bold",fontSize:17 }}>
          Select Availabilty
        </Text>
      </Pressable>
  
        </SafeAreaView >
        
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})