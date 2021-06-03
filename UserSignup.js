import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const UserSignup = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="First Name"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="Last Name"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType="number-pad"
          maxLength={11}
          placeholder="Phone Number"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType="email-address"
          placeholder="Email Address"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="Retype Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          placeholder="Location/Address"
        />
      </View>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}
          style={{
            width: 200, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Next
      </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserSignup
