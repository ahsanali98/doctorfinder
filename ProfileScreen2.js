import React from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 55, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Personal Info
        </Text>
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
          keyboardType='phone-pad'
          maxLength={11}
          placeholder="Phone Number"
        />
        <TextInput
          style={{
            marginLeft: 30, marginRight: 30, marginTop: 20, fontSize: 20, borderColor: '#000',
            borderWidth: 2, paddingBottom: 10, paddingTop: 10, paddingLeft: 5, backgroundColor: '#fff'
          }}
          keyboardType='email-address'
          placeholder="Email Address"
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
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 120 }}>
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

export default ProfileScreen2