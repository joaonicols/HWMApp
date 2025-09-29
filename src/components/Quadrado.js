import React from "react"
import { View, Text, StyleSheet } from "react-native"
import estilo from './Estilo'

const Flex = () => {
    return (
        <View style={[styles.container,
            {
                flexDirection: 'column',
            }, ]}>
                <Text style={estilo.txtGrande}>Hello World!!!</Text>
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'red'
    }
})

export default Flex