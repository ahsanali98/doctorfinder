import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

const AppointScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('AppointScreen2')}>
        <View style={{
          marginTop: 60, width: 300, height: 150, backgroundColor: '#fff', justifyContent: 'center',
          alignItems: 'center', borderRadius: 30, borderWidth: 1
        }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
            Next Session
      </Text>
          <Text style={{ fontSize: 20, color: 'grey', justifyContent: 'center' }}>
            Today, 02.00 PM{"\n"} Dr. Aisha Ahmed
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('AppointSMScreen1')}
          style={{
            height: 100, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
            Scheduled Meeting <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AppointPRScreen1')}
          style={{
            height: 100, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 20
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Pending Request <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AppointCHScreen1')}
          style={{
            height: 100, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 20
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Consultation History <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
          alignItems: 'center', marginTop: 20, height: 60, width: 380, borderWidth: 1
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeFooter')}>
            <Text>
              <Entypo name="home" size={40} color="grey" />
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Text>
                <Feather name="calendar" size={50} color="black" />
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

export default AppointScreen1