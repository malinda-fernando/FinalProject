import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from "react-native-elements"
import { colors, parameters } from '../global/styles'


export default function SearchTrainHeader() {
    return (
        <View style={styles.header}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginTop: -6 }}>
                <Icon
                    type="material- community"
                    name="menu"
                    color={colors.cardbackground}
                    size={32}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: 'bold', marginTop: -8, marginLeft: 89 }}>
                    TicketNow
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,

    }
})