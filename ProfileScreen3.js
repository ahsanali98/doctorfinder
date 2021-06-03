import React from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 35, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Payment Details
        </Text>
      </View>

      <View>
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
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
        <TouchableOpacity onPress={() => {
          Alert.alert(
            "Updated!", "Information Updated Successfully.",
            [
              {
                text: "OK", onPress: () => navigation.navigate('ProfileScreen1')
              }
            ]
          )
        }
        }
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Update
      </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default ProfileScreen3