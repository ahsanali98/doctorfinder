import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AppointScreen5 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingLeft: 120, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Feedback
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <AntDesign name="checkcircle" size={150} color="black" />
      </View>

      <View style={{ alignItems: 'center', marginTop: 50, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, color: '#000' }}>           Thank you for the feedback.{"\n"}    We make sure your feedback is taken{"\n"}into consideration to improve our services.</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('AppointScreen1')}
          style={{
            height: 60, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 100, borderWidth: 2
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Home
      </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default AppointScreen5

