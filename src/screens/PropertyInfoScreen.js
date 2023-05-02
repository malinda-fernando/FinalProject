import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'

import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'

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

    return (
        <SafeAreaView>



            <Text>PropertyInfoScreen</Text>
        </SafeAreaView>
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})