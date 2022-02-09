/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import {IconMoon} from './src/components/Icons.component';

const App: () => Node = () => {
  SystemNavigationBar.setNavigationColor('white');

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="white"
      />
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            marginLeft: 16,
            marginRight: 16,
          }}>
          {/* HEADER */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginTop: 70}}>
              <Text style={styles.headerText}>Hi, Helen</Text>
              <Text style={styles.subheaderText}>You have done 10 fasts</Text>
            </View>
            <View style={{marginTop: 70}}>
              <Image source={require('./src/assets/images/Group1685.png')} />
            </View>
          </View>
          {/* Fasting tracker */}
          <View
            style={[
              styles.container,
              {
                width: '100%',
                marginTop: 20,
                height: 112,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                backgroundColor: '#7573F0',
                borderRadius: 16,
              },
            ]}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',
                width:'100%'}}>
              <View style={{paddingTop: 20, paddingLeft: 20}}>
                <Text style={styles.bannerTitle}>Fasting tracker</Text>
                <Text style={[styles.bannersubTitle, {marginTop: 6}]}>
                  Start losing weight with interval
                </Text>
                <Text style={styles.bannersubTitle}>fasting</Text>
              </View>
              <View style={{paddingTop: 26, paddingRight: 23}}>
                <IconMoon color={'white'} size={14} name="close" />
              </View>
            </View>

            <View style={{position: 'absolute', right: 0}}>
              <Image
                style={{width: 170}}
                source={require('./src/assets/images/Group565.png')}
              />
            </View>
          </View>

          {/* Progress today */}
          <View style={[styles.container, {marginTop: 32}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={styles.title}> Progress today </Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.details}> details </Text>
                <IconMoon color={'#070934'} size={12} name="up" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{marginTop: 16, width: '100%'}}>
              <Image
                style={{width: '100%'}}
                source={require('./src/assets/images/Frame3177.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                marginTop: 7,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={{}}
                  source={require('./src/assets/images/Frame161.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={{}}
                  source={require('./src/assets/images/Frame158.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* My personal insights*/}
          <View style={[styles.container, {marginTop: 32, marginBottom: 200}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={styles.title}> My personal insights </Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.details}> see all </Text>
                <IconMoon color={'#070934'} size={12} name="up" />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 16,
              }}>
              <TouchableOpacity onPress={() => {}} style={{marginRight: 12}}>
                <Image source={require('./src/assets/images/Frame3215.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{marginRight: 12}}>
                <Image
                  source={require('./src/assets/images/Frame3215(1).png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{marginRight: 12}}>
                <Image source={require('./src/assets/images/Frame3215.png')} />
              </TouchableOpacity>
            </ScrollView>
          </View>
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

export default App;
