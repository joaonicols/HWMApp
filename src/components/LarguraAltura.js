import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './Estilo';

export default () => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', backgroundColor: '#a55050ad' }}
    >
      <View
        style={{
          flex: 0,
          width: 450,
          height: 150,
          backgroundColor: 'red',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24 }}>Titulo da Pagina</Text>
        <Text style={Estilo.txtGrande}>Titulo da Pagina</Text>
      </View>

      <View
        style={{
          flex: 2,
          width: 'auto',
          height: 100,
          backgroundColor: 'skyblue',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
            alignSelf: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'grey',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
            }}
          >
            Center
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-start',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'pink',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
            }}
          >
            Left
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-end',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'purple',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              alignSelf: 'center',
            }}
          >
            Right
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          width: 'auto',
          height: 250,
          backgroundColor: 'green',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      />  
    </View>

  );
};
