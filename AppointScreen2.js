import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const AppointScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 20, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Online Consultation
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

        <Text style={{ fontSize: 30, marginTop: 50, fontWeight: 'bold' }}>
          Please join the meeting.
          </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AppointScreen3')}
          style={{
            height: 250, width: 250, backgroundColor: 'black', alignItems: 'center',
            justifyContent: 'center', borderRadius: 125, marginTop: 40, borderWidth: 1
          }}
        >
          <Ionicons name="videocam" size={100} color="white" />
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default AppointScreen2