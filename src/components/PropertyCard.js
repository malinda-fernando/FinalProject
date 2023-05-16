import { Dimensions, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({ trains, children, property, adults, selectedDate, availabletrains }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Info", {
        name: property.name,
        distance: property.distance,
        oldPrice: property.oldPrice,
        photos: property.photos,
        departureTime: property.departureTime,
        arrivalTime: property.arrivalTime,
        newPrice: property.newPrice,
        availabletrains: property.trains,
        adults:adults,
        children:children,
        trains: trains,
        selectedDate: selectedDate,

      })} 
      style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image style={{ height: height / 4, width: 140 }} source={{ uri: property.image }} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" }}>
          <Text style={{ width: 199, }}>{property.name}</Text>
          <AntDesign name="hearto" size={18} color="red" />
        </View>
        <View >
          <MaterialCommunityIcons style={{ marginLeft: -204, marginTop: 30 }} name="map-marker-distance" size={20} color="black" />
          <Text style={{ marginLeft: -208, backgroundColor: "#6CB4EE", borderRadius: 5, paddingVertical: 3 }}> {property.distance} </Text>
        </View>
        <Text style={{ width: 200, marginLeft: -207, marginTop: 90, fontWeight: "bold", color: "gray" }}>{property.address.length > 50 ? property.substr(0, 50) : property.address}</Text>
        <Text style={{ marginTop: 4, fontSize: 13, fontWeight: "500", marginLeft: -204, marginTop: 115}}>Price for {adults} Adults and {children} children </Text>
        <View style={{ marginTop: 5, alignItems: "center", gap: 8, marginLeft: -185, marginTop: 135 }}>
        <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
>
              Rs  {property.oldPrice * ((adults) + (children))}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs {property.newPrice * ((adults) + (children))}
            </Text>
        </View>

      </Pressable>
    </View >
  )
}

export default PropertyCard

const styles = StyleSheet.create({})