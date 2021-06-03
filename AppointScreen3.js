import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function AppointScreen3({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEDF2', }}>
    <Image source={require('../assets/VC1.png')}
            style={{
              position: 'absolute'
            }}
          />
      <View style={{ height: 600, width: 400 }}>
        <Camera style={{ marginTop: 380, height: 200, width: 150, marginLeft: 210 }} type={type}>
          <View>
            <TouchableOpacity style={{ width: 50, backgroundColor: '#001529', borderRadius: 10, marginTop: 3 }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 20, color: 'white' }}> FLIP </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('AppointScreen4')}

          style={{
            height: 50, width: 200, backgroundColor: 'red', padding: 5, alignItems: 'center',
            justifyContent: 'center', borderRadius: 50, marginTop: 0
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>
            End
      </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}