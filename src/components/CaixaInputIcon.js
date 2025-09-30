import React from "react-native"
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default () => {
    return (
        <View style={styles.container}>
            <Icon name='user' size={20} color="#999" style={styles.icon} />
            <TextInput 
            style={styles.input} 
            placeholder="Entre com seu usuário" />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    }
})