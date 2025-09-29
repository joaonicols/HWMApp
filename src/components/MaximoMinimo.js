import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <View style={estilo.container}>
      <Text style={estilo.txtTamPeq}>O número 2 é menor que o 100</Text>
      <Text style={estilo.txtTamMed}>O número 2 é menor que o 100</Text>
      <Text style={estilo.txtTamGr}>O número 2 é menor que o 100</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    margin: 20,
  },

  txtTamPeq: {
    fontSize: 24,
    color: '#8d5959ff',
    fontWeight: 'bold',
  },

  txtTamMed: {
    fontSize: 32,
    color: 'red'
  },

  txtTamGr: {
    fontSize: 50,
    color: 'blue'
  }
});
