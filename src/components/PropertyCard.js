import { Dimensions, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({ Trains, children, property, adults, selectedDate, availableTrains }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Info", {
        name: property.name,
        distance: property.distance,
        ChildPrice: property.ChildPrice,
        photos: property.photos,
        AdultPrice: property.AdultPrice,
        availableTrains: property.Trains,
        adults: adults,
        children: children,
        Trains: Trains,
        selectedDate: selectedDate,
      })} style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}>
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
        <Text style={{ marginTop: 4, fontSize: 13, fontWeight: "500", marginLeft: -204, marginTop: 115 }}>Price for Adults and Children</Text>
        <View style={{ marginTop: 5, alignItems: "center", gap: 8, marginLeft: -175, marginTop: 135 }}>
          <Text style={{ color: "red", fontSize: 18 }}> 1 Adult: {property.AdultPrice}</Text>
          <Text style={{ color: "red", fontSize: 18 }}> 1 Child: {property.ChildPrice}</Text>
        </View>

      </Pressable>
    </View >
  )
}

export default PropertyCard

const styles = StyleSheet.create({})