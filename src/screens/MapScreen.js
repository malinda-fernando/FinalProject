import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react';

import { useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps'

const MapScreen = ({ }) => {
    const route = useRoute();
    const mapView = useRef(null);
    console.log(route.params)
    return (
        <View>

            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                ref={mapView}
                style={{ width: "100%", height: "100%" }}
            >

            </MapView>
        </View >
    )
}

export default MapScreen

const styles = StyleSheet.create({})