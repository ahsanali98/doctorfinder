import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const HomeFooter = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{
        marginTop: 30, height: 50, backgroundColor: '#EAEDF2', justifyContent: 'center',
        alignItems: 'center', borderTopWidth: 3, borderBottomWidth: 3
      }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          <Entypo name="location-pin" size={36} color="black" />Karachi
      </Text>
      </View>

      <View style={{
        marginLeft: 15, marginRight: 15, marginTop: 25, height: 50,
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
      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen1')}
          style={{
            height: 150, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 25
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
            Book Appointment <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BookVidScreen1')}
          style={{
            height: 150, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 25
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Book Video Consultation <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
          alignItems: 'center', marginTop: 72, height: 60, width: 380, borderWidth: 1
        }}>
          <TouchableOpacity>
            <Text>
              <Entypo name="home" size={50} color="black" />
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AppointScreen1')}>
              <Text>
                <Feather name="calendar" size={40} color="grey" />
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen1')}>
              <Text>
                <AntDesign name="user" size={40} color="grey" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeFooter