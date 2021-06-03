import React from 'react';
import { Image, Text, View, TouchableOpacity, } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const AppointScreen4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingLeft: 120, paddingTop: 30, fontSize: 30, fontWeight: 'bold' }} >
          Feedback
        </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
          <Image source={require('../assets/Doctor.png')}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              marginLeft: 5
            }}
          />
          <View>
            <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
              Dr. Aisha Ahmed
            </Text>
            <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
              Child Specialist
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
              <Entypo name="location-pin" size={24} color="grey" />
            DHA Clinics
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff', marginTop: 20, height: 130, width: 350 }}>
          <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
            Feedback
          </Text>
          <TextInput style={{
            borderWidth: 1, height: 80, marginLeft: 5, marginTop: 10, marginRight: 5,
            paddingBottom: 60, fontSize: 15
          }} placeholder="Write your feedback">
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AppointScreen5')}
          style={{
            width: 300, height: 70, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 100
          }}
        >
          <Text style={{ color: '#fff', fontSize: 25 }}>
            Submit
      </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AppointScreen1')}>
          <Text style={{ color: 'grey', fontSize: 20, marginTop: 10, textDecorationLine: 'underline' }}>
            No, thanks!
      </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default AppointScreen4