import React, { useState } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Login from '../assets/Login.png';

const UserLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setData = () => {
    if (((email == "asma1@gmail.com") && (password == "abcd1234")) || ((email == "asma1@gmail.com") && (password == "12345678"))) {
      navigation.navigate('HomeFooter')
    }
    else {
      Alert.alert('Incorrect Input!', 'Enter valid credentials.')
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
      <Image source={Login}
        style={{
          width: 220,
          height: 250,
          marginTop: 0,
          marginBottom: 0,
          alignSelf: "center",
          resizeMode: 'stretch'
        }}
      />

      <View>
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
          placeholder="Email Address"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          onChangeText={(value) => setPassword(value)}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={setData}
          style={{
            width: 200, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Login
      </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('UserSignup')}
          style={{
            width: 200, backgroundColor: '#EAEDF2', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 20, borderWidth: 1
          }}
        >
          <Text style={{ color: '#000', fontSize: 20 }}>
            Sign Up
      </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default UserLogin