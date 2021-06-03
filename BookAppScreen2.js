import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const BookAppScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 40, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Doctor Details
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
        <View style={{ backgroundColor: '#fff', marginTop: 10, height: 90, width: 350 }}>
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>
            Short Description
          </Text>
          <Text style={{ fontSize: 16, paddingLeft: 5, color: 'grey', marginTop: 1 }}>
            Dr. Asma Zain completed her specialization from DOW Medical College, Karachi.
            She has been in field since 10 years.
          </Text>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: 10, height: 70, width: 350 }}>
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>
            Schedule
          </Text>
          <Text style={{ fontSize: 16, paddingLeft: 5, color: 'grey', marginTop: 1 }}>
            Monday to Thursday:   12.00 pm - 05.00 pm {"\n"}
            Friday to Saturday:       02.00 pm - 07.00 pm
          </Text>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: 10, height: 50, width: 350 }}>
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>
            Location
          </Text>
          <Text style={{ fontSize: 16, paddingLeft: 5, color: 'grey', marginTop: 1 }}>
            DHA Clinics, Street 10, Phase 6, DHA, Karachi
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', marginTop: 10, height: 110, width: 350 }}>
          <Image source={require('../assets/Degree1.png')}
            style={{
              width: 70,
              height: 100,
              marginTop: 5,
              marginLeft: 10
            }}
          />
          <Image source={require('../assets/Degree2.png')}
            style={{
              width: 70,
              height: 100,
              marginTop: 5,
              marginLeft: 5
            }}
          />
          <Image source={require('../assets/Baby.png')}
            style={{
              width: 150,
              height: 100,
              marginTop: 5,
              marginLeft: 5
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen3')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 20, borderWidth: 1
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Book Physical Appointment
      </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BookAppScreen2
