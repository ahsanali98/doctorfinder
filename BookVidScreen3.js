import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default class BookVidScreen3 extends Component {
  state = {
    selectedButton: '',
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EAEDF2' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black"
              style={{ paddingLeft: 15, paddingTop: 20, marginTop: 10 }} />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 20, paddingTop: 30, marginTop: 0, fontSize: 30, fontWeight: 'bold' }} >
            Online Consultation
        </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 10, height: 120, width: 350 }}>
            <Image source={require('../assets/Doctor.png')}
              style={{
                width: 100,
                height: 100,
                marginTop: 10,
                marginLeft: 5
              }}
            />
            <View>
              <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 20 }}>
                Dr. Aisha Ahmed
            </Text>
              <Text style={{ fontSize: 15, paddingLeft: 20, paddingTop: 0, color: 'green' }}>
                Child Specialist
            </Text>
              <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'grey' }}>
                <Entypo name="location-pin" size={24} color="grey" />
            DHA Clinics
            </Text>
            </View>


          </View>

          <View style={{ height: 200 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>
              Select Day and Time Slot
        </Text>
            <ScrollView
              scrollEventThrottle={10}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.setState({ selectedButton: 'button1' })}
                style={{
                  height: 80, backgroundColor: this.state.selectedButton === 'button1' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, marginTop: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  Tuesday, 11th May
      </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ selectedButton: 'button2' })}
                style={{
                  height: 80, backgroundColor: this.state.selectedButton === 'button2' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, marginTop: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  Wednesday, 12th May
      </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ selectedButton: 'button3' })}
                style={{
                  height: 80, backgroundColor: this.state.selectedButton === 'button3' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, marginTop: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  Thursday, 13th May
      </Text>
              </TouchableOpacity>


            </ScrollView>

            <ScrollView
              scrollEventThrottle={10}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => this.setState({ selectedTouch: 'touch1' })}
                style={{
                  height: 50, backgroundColor: this.state.selectedTouch === 'touch1' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  12.00 PM
      </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ selectedTouch: 'touch2' })}
                style={{
                  height: 50, backgroundColor: this.state.selectedTouch === 'touch2' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  01.00 PM
      </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ selectedTouch: 'touch3' })}
                style={{
                  height: 50, backgroundColor: this.state.selectedTouch === 'touch3' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  02.00 PM
      </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ selectedTouch: 'touch4' })}
                style={{
                  height: 50, backgroundColor: this.state.selectedTouch === 'touch4' ? 'green' : 'black',
                  padding: 10, alignItems: 'center', marginLeft: 10, justifyContent: 'center',
                  borderRadius: 10, borderWidth: 1
                }}
              >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                  03.00 PM
      </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{ marginTop: 20, height: 90, width: 350 }}>
            <Text style={{ fontSize: 25, paddingLeft: 5, fontWeight: 'bold' }}>
              Fee: <Text style={{ fontWeight: 'normal' }}>PKR. 1000/-</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BookAppScreen4')}
            style={{
              height: 70, width: 300, backgroundColor: '#000', padding: 10, alignItems: 'center',
              justifyContent: 'center', borderRadius: 40, marginTop: 40, borderWidth: 1
            }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>
              Proceed to Payment
      </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}