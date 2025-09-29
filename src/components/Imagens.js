import React from "react";
import { StyleSheet, TextInput } from 'react-native';
import { Text, Image, View, Button } from 'react-native';
import Estilo from './Estilo';

export default () => {
  return (
    <View>
      <Image source={require('../assets/logo.png')} style={styles.tamImg} />
      <Text style={Estilo.txtGrande}>Trabalhando com imagens</Text>
      <TextInput style={Estilo.txtGrande} placeholder='Insira seu e-mail:'/>
      <TextInput style={Estilo.txtGrande} placeholder='Insira sua senha:'/>
      <Button title="Entrar" color="#ff0000" />
      <Button title="Entrar" color="#038e51ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  tamImg: {
    width: 240,
    height: 240,
  },
});
