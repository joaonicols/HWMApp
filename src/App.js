import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Quadrado from "./components/Quadrado";
import { StyleSheet } from "react-native";
import LarguraAltura from "./components/LarguraAltura";
import Imagens from "./components/Imagens";

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Imagens/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;
