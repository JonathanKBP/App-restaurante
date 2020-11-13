import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Slider} from 'react-native';

import {
  Picker
} from '@react-native-community/picker';

// import {
//   Slider
// } from '@react-native-community/slider';



const AdicionarRestauranteTela = (props) => {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [categoria, setCategoria] = useState('Categoria');
  const [preco, setPreco] = useState(1);

  return (
    <View
      style={estilos.container}>
      <TextInput
        style={estilos.nomeTextInput}
        placeholder="Nome do restaurante"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <View
        style={estilos.cidadeECategoriaView}>
        <TextInput
          style={estilos.cidadeTextInput}
          placeholder="Cidade"
          onChangeText={(texto) => setCidade(texto)}
          value={cidade}
        />
        <Picker
          selectedValue={categoria}
          style={estilos.categoriaPicker}
          onValueChange={(value, index) => {
          setCategoria(value)
        }}
          mode="dropdown">
          <Picker.Item label="Categoria" value="Categoria" />
          <Picker.Item label="Japonês" value="Japonês" />
          <Picker.Item label="Brasileiro" value="Brasileiro" />
        </Picker>
      </View>
      <View
        style={estilos.precoView}>
          <Text>Preço</Text>
          <Slider
            style={estilos.precoSlider}
            minimumValue={1}
            maximumValue={5}
            value={preco}
            step={1}
            onValueChange={(value) => setPreco(value)}
          />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  nomeTextInput: {
    width: '90%',
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginVertical: 8,
    alignSelf: 'center'
  },
  cidadeECategoriaView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12
  },
  cidadeTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    width: '40%',
  },
  categoriaPicker: {
    width: '40%',
  },
});

export default AdicionarRestauranteTela;