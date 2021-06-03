import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const AppointPRScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 45, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Online Session
        </Text>
      </View>

      <View style={{
        marginLeft: 15, marginRight: 15, marginTop: 10, height: 50,
        backgroundColor: 'white', borderWidth: 2, borderRadius: 10
      }}>
        <TextInput
          style={{
            paddingBottom: 10, paddingTop: 10, paddingLeft: 5, fontSize: 22
          }}
          placeholder="Search Doctor"
        >
        </TextInput>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 150, width: 350 }}>
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
              Dr. Asma Zain
            </Text>
            <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
              Child Specialist
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 10, color: 'grey' }}>
              10/05/2021, 03:00 PM
            </Text>
            <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 10, color: 'black', fontWeight: 'bold' }}>
              PENDING
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 150, width: 350 }}>
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
              Dr. Isha Ali
            </Text>

            <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
              Cardiologist
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 10, color: 'grey' }}>
              11/05/2021, 09:00 PM
            </Text>
            <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 10, color: 'black', fontWeight: 'bold' }}>
              CANCELLED
            </Text>
          </View>
        </View>


      </View>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
        alignItems: 'center', marginTop: 162, height: 60, width: 380, borderWidth: 1
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('AppointPRScreen1')}>
          <Text>
            <Ionicons name="time" size={50} color="grey" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            <Ionicons name="videocam" size={50} color="black" />
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default AppointPRScreen2