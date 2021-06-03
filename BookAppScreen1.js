import React from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import doctor from '../assets/Doctor.png'
import doctor2 from '../assets/Doctor2.png'

const BookAppScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 50, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Appointment
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

      <ScrollView
        scrollEventThrottle={10}
        showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen2')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
              <Image source={doctor}
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
                <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                  <Entypo name="location-pin" size={24} color="grey" />
            DHA Clinics
            </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen1')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
              <Image source={doctor}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginLeft: 5
                }}
              />
              <View>
                <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                  Dr. Soha Ali
            </Text>
                <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
                  Cardiologist
            </Text>
                <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                  <Entypo name="location-pin" size={24} color="grey" />
            South City Hospital
            </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen1')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
              <Image source={doctor}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginLeft: 5
                }}
              />
              <View>
                <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                  Dr. Sana Ahmed
            </Text>
                <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
                  General Surgeon
            </Text>
                <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                  <Entypo name="location-pin" size={24} color="grey" />
            Aga Khan Hospital
            </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen1')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
              <Image source={doctor}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginLeft: 5
                }}
              />
              <View>
                <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                  Dr. Shifa Ali
            </Text>
                <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
                  Radiologist
            </Text>
                <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                  <Entypo name="location-pin" size={24} color="grey" />
            NMC Hospital
            </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('BookAppIAScreen1')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
              <Image source={doctor2}
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
                  Child Specialist
            </Text>
                <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                  <Entypo name="location-pin" size={24} color="grey" />
            NMC Hospital
            </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default BookAppScreen1