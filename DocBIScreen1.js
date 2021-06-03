import React, { Component } from 'react';
import { Alert, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default class DocBIScreen1 extends Component {
    state = {
        selectedButton: '',
    };

    setData() {
        Alert.alert(
            "Updated!", "Information Updated Successfully.",
            [
                {
                    text: "OK", onPress: () => this.props.navigation.navigate('DocScreen1')

                }
            ]
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={30} color="black"
                            style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: 65, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
                        Booking Info
        </Text>
                </View>


                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                    Hospital/Clinic Name
          </Text>
                <TextInput style={{
                    borderWidth: 1, height: 40, marginLeft: 10, marginTop: 5, marginRight: 10, paddingLeft: 2,
                    paddingBottom: 0, fontSize: 20, backgroundColor: '#fff'
                }} placeholder="E.g: South City Hospital">
                </TextInput>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                    Fees
          </Text>
                <TextInput style={{
                    borderWidth: 1, height: 40, marginLeft: 10, marginTop: 5, marginRight: 10, paddingLeft: 2,
                    paddingBottom: 0, fontSize: 20, backgroundColor: '#fff'
                }}
                    maxLength={5}
                    keyboardType="numeric"
                    placeholder="E.g: 2000">
                </TextInput>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                        Days and Time Slots
        </Text>
                    <ScrollView
                        scrollEventThrottle={10}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton: 'button1' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton === 'button1' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Monday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton2: 'button2' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton2 === 'button2' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Tuesday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton3: 'button3' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton3 === 'button3' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Wednesday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton: 'button4' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton === 'button4' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Thursday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton: 'button5' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton === 'button5' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Friday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton: 'button6' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton === 'button6' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Saturday
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedButton: 'button7' })}
                            style={{
                                height: 80, width: 130, backgroundColor: this.state.selectedButton === 'button7' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Sunday
      </Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextInput style={{
                            borderWidth: 1, height: 40, marginTop: 5, width: 120, marginLeft: 4, fontSize: 20,
                            backgroundColor: '#fff', textAlign: 'center'
                        }}
                            maxLength={5}
                            keyboardType='numbers-and-punctuation'
                            placeholder="Start Time">
                        </TextInput>
                        <Text style={{ fontSize: 30, fontWeight: '500', paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>TO</Text>
                        <TextInput style={{
                            borderWidth: 1, height: 40, marginTop: 5, width: 120, fontSize: 20,
                            backgroundColor: '#fff', textAlign: 'center'
                        }}
                            maxLength={5}
                            keyboardType="numbers-and-punctuation"
                            placeholder="End Time">
                        </TextInput>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>
                        Availability
        </Text>
                    <ScrollView
                        scrollEventThrottle={10}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedAvail: 'avail1' })}
                            style={{
                                height: 80, width: 111, backgroundColor: this.state.selectedAvail === 'avail1' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Physical
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedAvail: 'avail2' })}
                            style={{
                                height: 80, width: 111, backgroundColor: this.state.selectedAvail === 'avail2' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Online
      </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ selectedAvail: 'avail3' })}
                            style={{
                                height: 80, width: 111, backgroundColor: this.state.selectedAvail === 'avail3' ? 'green' : 'black',
                                padding: 10, alignItems: 'center', marginLeft: 10,
                                justifyContent: 'center', borderRadius: 10, marginTop: 5, borderWidth: 1
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Both
      </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.setData.bind(this)}
                        style={{
                            height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
                            justifyContent: 'center', borderRadius: 40, marginTop: 30, borderWidth: 1
                        }}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 }}>
                            Update
      </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}