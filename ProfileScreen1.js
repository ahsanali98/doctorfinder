import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen1 = ({ navigation }) => {
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
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingLeft: 150, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
          Profile
        </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350, borderWidth: 1 }}>
          <Image source={require('../assets/Patient.png')}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              marginLeft: 5,
              position: 'absolute'
            }}
          />
          {<Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 10, marginLeft: 5 }} />}
          <View>
            <Text style={{ fontSize: 26, paddingLeft: 20, paddingTop: 20 }}>
              Asma Zain
            </Text>
            <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 0, color: 'blue', textDecorationLine: 'underline' }}>
              asma1@gmail.com
            </Text>
            <TouchableOpacity onPress={pickImage}>
              <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 5, color: 'grey' }}>
                Edit Profile Picture
            </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen2')}
            style={{
              height: 90, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
              justifyContent: 'center', borderRadius: 10, marginTop: 10
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
              Personal Info <AntDesign name="right" size={20} color="#190" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen3')}
            style={{
              height: 90, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
              justifyContent: 'center', borderRadius: 10, marginTop: 10
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
              Payment Details <AntDesign name="right" size={20} color="#190" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen4')}
            style={{
              height: 90, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
              justifyContent: 'center', borderRadius: 10, marginTop: 10
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
              Change Password <AntDesign name="right" size={20} color="#190" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}
            style={{
              height: 50, width: 200, backgroundColor: 'red', padding: 10, alignItems: 'center',
              justifyContent: 'center', borderRadius: 50, marginTop: 20
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', justifyContent: 'flex-start' }}>
              Logout
          </Text>
          </TouchableOpacity>
        </View>


      </View>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
        alignItems: 'center', marginTop: 32, height: 60, width: 380, borderWidth: 1
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeFooter')}>
          <Text>
            <Entypo name="home" size={40} color="grey" />
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
          <TouchableOpacity>
            <Text>
              <AntDesign name="user" size={50} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ProfileScreen1