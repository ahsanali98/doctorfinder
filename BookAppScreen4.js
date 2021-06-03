import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const BookAppScreen4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black"
            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 80, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Payment
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 20, color: 'grey' }}>Total Amount</Text>
        <Text style={{ fontSize: 40 }}>PKR. 1000/-</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 20, color: 'grey' }}>Choose your payment method</Text>
        <View style={{
          height: 60, width: 300, borderWidth: 3, marginTop: 10, justifyContent: 'flex-start',
          paddingLeft: 10, flexDirection: 'row', alignItems: 'center'
        }}>
          <Entypo name="credit-card" size={50} color="black" />
          <Text style={{ paddingLeft: 12, fontSize: 27 }}>
            40** **** **** **12
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 60, width: 300, alignItems: 'center',
            justifyContent: 'center', borderColor: 'grey', marginTop: 10, borderWidth: 1
          }}
        >
          <Text style={{ color: '#000', fontSize: 20 }}>
            Bank Transfer
      </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('BookAppScreen5')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 40, marginTop: 120, borderWidth: 2
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            Pay
      </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BookAppScreen4

