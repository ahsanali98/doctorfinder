import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const CardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 20, paddingLeft: 30, paddingTop: 10 }}>
          Enter Card Details
      </Text>
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="Name on Card"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType='numeric'
          maxLength={16}
          placeholder="Card Number"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType='numeric'
          maxLength={3}
          secureTextEntry={true}
          placeholder="CVC"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType='numbers-and-punctuation'
          maxLength={5}
          placeholder="Expiry Date (E.g: 01/12)"
        />
      </View>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeFooter')}
          style={{
            width: 200, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Confirm
      </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default CardScreen