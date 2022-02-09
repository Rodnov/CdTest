import React from 'react';
import {View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import IcomoonConfig from '../fonts/selection';

const Icomoon = createIconSetFromIcoMoon(IcomoonConfig);

export const IconMoon = (props: any) => {
  return (
    <View>
      <Icomoon color={props.color} size={props.size} name={props.name} />
    </View>
  );
};
