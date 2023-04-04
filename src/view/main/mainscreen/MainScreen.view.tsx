import React, {useState} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialScreen, DeviceScreen, QuantityScreen, InfoScreen} from '~view';
import { TouchableOpacity, Image } from 'react-native';
import { getSource } from '~assets';

const Tab = createBottomTabNavigator();

export const MainScreen: React.FC<any> = (props, {navigation}) => {
  const {} = props;

  return (
    <Tab.Navigator>
      <Tab.Screen name="InfoScreen" component={InfoScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 2.55, height: size * 2,}}
            source={focused ? getSource('INFO') : getSource('INFO_FOCUSED')}
          />
        );
      },}} />
      <Tab.Screen name="MaterialScreen" component={MaterialScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 2.55, height: size * 2,}}
            source={focused ? getSource('MATERIAL') : getSource('MATERIAL_FOCUSED')}
          />
        );
      },}} />
      <Tab.Screen name="DeviceScreen" component={DeviceScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 2.55, height: size * 2,}}
            source={focused ? getSource('DEVICE') : getSource('DEVICE_FOCUSED')}
          />
        );
      },}} />
      <Tab.Screen name="QuantityScreen" component={QuantityScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 3.55, height: size * 2,}}
            source={focused ? getSource('QUANTITY') : getSource('QUANTITY_FOCUSED')}
          />
        );
      },}} />
    </Tab.Navigator>
  );
};