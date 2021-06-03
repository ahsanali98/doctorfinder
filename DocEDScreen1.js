import React, { useState, useEffect } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const DocEDScreen1 = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const setData = () => {
        Alert.alert(
            "Updated!", "Details Updated Successfully.",
            [
                {
                    text: "OK", onPress: () => navigation.navigate('DocScreen1')
                }
            ]
        )
    }
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

    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage2(result.uri);
        }
    };

    const pickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage3(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="black"
                        style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={{ paddingLeft: 75, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
                    Edit Details
        </Text>
            </View>
            <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                Short Description
          </Text>
            <TextInput style={{
                borderWidth: 1, height: 80, marginLeft: 5, marginTop: 5, marginRight: 5,
                paddingBottom: 60, fontSize: 15, backgroundColor: '#fff'
            }} placeholder="Write about yourself here.">
            </TextInput>

            <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                Schedule
          </Text>
            <TextInput style={{
                borderWidth: 1, height: 80, marginLeft: 5, marginTop: 5, marginRight: 5,
                paddingBottom: 60, fontSize: 15, backgroundColor: '#fff'
            }} placeholder="Mention days and time here.">
            </TextInput>

            <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                Location
          </Text>
            <TextInput style={{
                borderWidth: 1, height: 80, marginLeft: 5, marginTop: 5, marginRight: 5,
                paddingBottom: 60, fontSize: 15, backgroundColor: '#fff'
            }} placeholder="Write your hospital's/clinic's complete address here.">
            </TextInput>

            <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                Images
          </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, height: 110, width: 360 }}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={require('../assets/Upload.png')}
                        style={{
                            width: 80,
                            height: 80,
                            marginTop: 5,
                            marginLeft: 15,
                            position: 'absolute'
                        }}
                    />
                    {<Image source={{ uri: image }} style={{ width: 90, height: 90, marginTop: 5, marginLeft: 15 }} />}
                </TouchableOpacity>

                <TouchableOpacity onPress={pickImage2}>
                    <Image source={require('../assets/Upload.png')}
                        style={{
                            width: 80,
                            height: 80,
                            marginTop: 5,
                            marginLeft: 5,
                            position: 'absolute'
                        }}
                    />
                    {<Image source={{ uri: image2 }} style={{ width: 90, height: 90, marginTop: 5, marginLeft: 5 }} />}
                </TouchableOpacity>

                <TouchableOpacity onPress={pickImage3}>
                    <Image source={require('../assets/Upload.png')}
                        style={{
                            width: 80,
                            height: 80,
                            marginTop: 5,
                            marginLeft: 5,
                            position: 'absolute'
                        }}
                    />
                    {<Image source={{ uri: image3 }} style={{ width: 90, height: 90, marginTop: 5, marginLeft: 5 }} />}
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={setData}
                    style={{
                        height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
                        justifyContent: 'center', borderRadius: 40, marginTop: 1, borderWidth: 1
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>
                        Update
      </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DocEDScreen1