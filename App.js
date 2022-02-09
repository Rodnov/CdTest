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
} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const App: () => Node = () => {
  SystemNavigationBar.setNavigationColor('white');

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="white"
      />
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
        <View style={[styles.container, {marginTop: 20}]}>
          <Image
            style={{width: '100%'}}
            source={require('./src/assets/images/Banner.png')}
          />
        </View>
        {/* Progress today */}
        <View style={[styles.container,{marginTop: 32}]}>
          <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%',
              alignItems: 'center'}}>
            <Text style={styles.title}> Progress today </Text>
            <Text style={styles.details}> details </Text>
          </View>
            <View  style={{marginTop:16}}>
                <Image
                    style={{}}
                    source={require('./src/assets/images/Frame3177.png')}
                />
            </View>
        </View>
      </ScrollView>
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
});

export default App;
