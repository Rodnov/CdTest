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

const OnboardingScreen = props => {
  SystemNavigationBar.setNavigationColor('white');

  const [bannerVisible, setbannerVisible] = useState(true);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="white"
      />
      <View>
        <ScrollView>
        </ScrollView>
        <View style={{marginLeft: 16, marginRight: 16}}>
          <View
            style={{
              height: 70,
              width: '100%',
              backgroundColor: 'white',
              justifyContent: 'space-around',
              alignItems: 'center',
              position: 'absolute',
              bottom: 32,
              borderRadius: 32,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginLeft: 9,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <IconMoon color={'#070934'} size={16} name="Home" />
              <Text style={[styles.tabTextActive, {marginLeft: 9}]}>main</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: '#7573F0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 48,
                width: 48,
                height: 48,
              }}>
              <IconMoon color={'white'} size={24} name="plus" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginLeft: 9,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <IconMoon color={'#A9AAB8'} size={18} name="journal" />
              <Text style={styles.tabTextNotActive}>journal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '800',
    color: '#070934',
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '500',
    color: '#858692',
  },
  bannerTitle: {
    fontSize: 18,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '700',
    color: 'white',
  },
  bannersubTitle: {
    fontSize: 16,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '400',
    color: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '700',
    color: '#070934',
  },
  details: {
    fontSize: 14,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '500',
    color: '#070934',
  },
  tabTextActive: {
    fontSize: 12,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '500',
    color: '#070934',
  },
  tabTextNotActive: {
    fontSize: 12,
    fontFamily: 'Manrope-VariableFont_wght',
    fontWeight: '500',
    color: '#A9AAB8',
  },
});

export default OnboardingScreen;
