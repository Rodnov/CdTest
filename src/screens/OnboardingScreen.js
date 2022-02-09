import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {IconMoon} from '../components/Icons.component';

const OnboardingScreen = (props) => {
  SystemNavigationBar.setNavigationColor('#EBEBFC');

  const [bannerVisible, setbannerVisible] = useState(true);

  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#EBEBFC', height: '100%'}}>
        <StatusBar />
        <View style={{marginTop: 24}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
              marginLeft: 16,
              marginRight: 16,
              height: '100%',
            }}>
            {/* HEADER */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('MainScreen');
                }} style={{}}>
                  <IconMoon color={'#070934'} size={14} name="left" />
                </TouchableOpacity>
              </View>
              <View style={{width: '90%',marginLeft: 22, height: 8,backgroundColor:'white', borderRadius: 60}}>
                <View style={{height: 8, width: '80%', backgroundColor:'#7573F0', borderRadius: 60 }} >
                </View>
              </View>
            </View>
              <Text style={styles.title}>What's your current weight? </Text>
          </ScrollView>
          <View style={{marginLeft: 16, marginRight: 16}}>
            <View
              style={{
                height: 54,
                width: '100%',
                backgroundColor: '#7573F0',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'absolute',
                bottom: 32,
                borderRadius: 32,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {  props.navigation.navigate('MainScreen');}}
                style={{
                  marginLeft: 9,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.buttonText}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    buttonText: {
    fontSize: 16,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '600',
    color: 'white',
  },
    title:{
        fontSize: 24,
        fontFamily: 'Manrope-VariableFont_wght',
        fontWeight: '800',
        color: '#070934',
        textAlign:'center',
        marginTop:40
    }
});

export default OnboardingScreen;
