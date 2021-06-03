import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BookAppScreen5 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingLeft: 130, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Payment
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <AntDesign name="checkcircle" size={150} color="black" />
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 22, color: '#000' }}>Please transfer the amount in the{"\n"}        following bank account:</Text>
        <Text style={{ fontSize: 18, color: '#000', marginTop: 10, borderWidth: 1, padding: 10 }}>Bank Name: Meezan Bank{"\n"}Account No: 0120 31346782{"\n"}Account Title: Doctor Finder</Text>
        <Text style={{ marginTop: 10, fontSize: 18, color: '#000' }}>Email us a snapshot of transfer receipt{"\n"}        on <Text style={{ fontWeight: 'bold' }}>info@doctorfinder.com</Text></Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeFooter')}
          style={{
            height: 60, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 50, borderWidth: 2
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

export default BookAppScreen5