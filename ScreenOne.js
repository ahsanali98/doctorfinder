import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ScreenOne = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#EAEDF2', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: 'bold' }}>   WELCOME TO{"\n"}DOCTOR FINDER</Text>
            <View>
                <Text style={{ fontSize: 35, marginTop: 60 }}>Continue As</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}
                style={{
                    width: 200, backgroundColor: '#000', padding: 10,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 10
                }}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>User</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DocLogin')}
                style={{
                    width: 200, backgroundColor: '#fff', padding: 10, borderWidth: 1,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 15
                }}>
                    <Text style={{ color: '#000', fontSize: 20 }}>Doctor</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenOne
