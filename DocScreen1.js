import React, { useState, useEffect } from 'react';
import { Switch, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function DocScreen1({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: '#EAEDF2', marginTop: 30, height: 100 }}>
          <Image source={require('../assets/Doctor2.png')}
            style={{
              width: 100,
              height: 100,
              position: 'absolute'
            }}
          />
          {<Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
        </View>
        <TouchableOpacity onPress={pickImage}>
          <Text style={{ fontSize: 15, color: 'grey' }}>Change Profile Picture</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Dr. Isha Ali</Text>
        <Switch style={{ marginTop: 5 }}
          trackColor={{ false: '#fff', true: '#00D024' }}
          thumbColor={isEnabled ? "#fff" : "#fff"}
          ios_backgroundColor='#FF0000'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View
        style={{ alignItems: 'center', justifyContent: 'center' }}>

        <TouchableOpacity onPress={() => navigation.navigate('DocSAPAScreen1')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
            Scheduled Appointments <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DocEDScreen1')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Edit Details <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DocBIScreen1')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Booking Info <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DocCPScreen1')}
          style={{
            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 10, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Change Password <AntDesign name="right" size={20} color="#190" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DocLogin')}
          style={{
            height: 50, width: 200, backgroundColor: 'red', padding: 10, alignItems: 'center',
            justifyContent: 'center', borderRadius: 50, marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
            Logout
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}