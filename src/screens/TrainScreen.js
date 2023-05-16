import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Entypo } from "@expo/vector-icons";

const TrainScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log(route.params)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Available Trains",
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
   
    const [selected, setSelected] = useState([]);
    return (
        <>
       <ScrollView>
        {route.params.trains.map((item,index) => (
            <Pressable style={{margin:10, backgroundColor:"white", padding:10}} key={index}>
                <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                    <Text  style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}>{item.name}</Text>
                    <AntDesign name="infocirlceo" size={24} color="#007FFF"/>
                </View>
               
                <Text style={{ marginTop: 3, fontSize: 16 }}>
              pay for the tickets
            </Text>
            <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
              Free cancellation Available
            </Text>
           

            <View style={{ flexDirection:"row",alignItems:"center",marginTop:8, marginLeft:5}}>
                <Text>Departure time: {item.departureTime}</Text>
                <Text style={{ marginHorizontal:47}}>Arrival time: {item.arrivalTime}</Text>
            </View>
            
            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#007FFF",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop:10
                  
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                  marginTop:10
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                    
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
            </Pressable>
        ))}
       </ScrollView>
       {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
             oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              distance: route.params.distance,
              selectedDate: route.params.selectedDate,
              trains:route.params.trains
            
            })
          }
          style={{
            backgroundColor: "#1F41BB",
            padding: 8,
            marginBottom: 20,
            borderRadius: 7,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
    
}

export default TrainScreen

const styles = StyleSheet.create({})