import React, { useState } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen4 = ({ navigation }) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const setData = () => {
    if (password1.length == 0) {
      Alert.alert('Old Password Field Empty!', 'Please type old password.')
    }
    else {
      if (password2 == password3) {
        Alert.alert(
          "Updated!", "Password Updated Successfully.",
          [
            {
              text: "OK", onPress: () => navigation.navigate('ProfileScreen1')
            }
          ]
        )
      }
      else {
        Alert.alert('Incorrect Password!', 'Passwords do not match.')
      }
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 25, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Change Password
        </Text>
      </View>

      <View>
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          onChangeText={(value) => setPassword1(value)}
          placeholder="Old Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          onChangeText={(value) => setPassword2(value)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          onChangeText={(value) => setPassword3(value)}
          placeholder="Retype Password"
          secureTextEntry={true}
        />

      </View>

      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 250 }}>
        <TouchableOpacity onPress={setData}
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

export default ProfileScreen4