import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const DocSAVCScreen1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color="black"
                        style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={{ paddingLeft: 20, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
                    Video Consultation
        </Text>
            </View>

            <View style={{
                marginLeft: 15, marginRight: 15, marginTop: 10, height: 50,
                backgroundColor: 'white', borderWidth: 2, borderRadius: 10
            }}>
                <TextInput
                    style={{
                        paddingBottom: 10, paddingTop: 10, paddingLeft: 5, fontSize: 22
                    }}
                    placeholder="Search Patient"
                >
                </TextInput>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('DocSAVCScreen2')}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
                        <Image source={require('../assets/Patient.png')}
                            style={{
                                width: 100,
                                height: 100,
                                marginTop: 10,
                                marginLeft: 5
                            }}
                        />
                        <View>
                            <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                                Amir Ali
            </Text>
                            <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 5, color: 'grey' }}>
                                10/05/2021, 09:00 PM
            </Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
                    <Image source={require('../assets/Patient.png')}
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 10,
                            marginLeft: 5
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                            Isha Ahmed
            </Text>
                        <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 5, color: 'grey' }}>
                            11/05/2021, 04:00 PM
            </Text>
                    </View>
                </View>

            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff',
                alignItems: 'center', marginTop: 222, height: 60, width: 380, borderWidth: 1
            }}>
                <Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DocSAPAScreen1')}>
                        <Ionicons name="time" size={50} color="grey" />
                    </TouchableOpacity>
                </Text>
                <Text>
                    <TouchableOpacity>
                        <Ionicons name="videocam" size={50} color="black" />
                    </TouchableOpacity>
                </Text>

            </View>

        </View >
    )
}

export default DocSAVCScreen1

