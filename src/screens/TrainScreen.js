import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const TrainScreen = () => {
    const route = useRoute();
    console.log(route.params)
    return (
        <View>
            <Text>TrainScreen</Text>
        </View>
    )
}

export default TrainScreen

const styles = StyleSheet.create({})