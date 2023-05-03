import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'

import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'

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

    return (
        <SafeAreaView>

            <ScrollView>
                <Pressable style={{ flexDirection: "row", flexWrap: "wrap" }} >
                    {
                        route.params.photos?.slice(0, 5).map((photo) => (
                            <View>
                                <Image
                                    style={{
                                        width: 120,
                                        height: pixelNormalize(80),
                                        borderRadius: pixelNormalize(4),
                                    }}
                                    source={{ uri: photo.image }}
                                />
                            </View>
                        ))
                    }
                </Pressable>
                <View>
                    <View>
                        <Text>{route.params.name}</Text>
                    </View>
                </View>

            </ScrollView>



        </SafeAreaView >
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})