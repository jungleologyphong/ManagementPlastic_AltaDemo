import React, {useState} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InfoBlowScreen ,BlowScreen, QuantityScreen, QuantityComfirmScreen} from '~view';
import { Image } from 'react-native';
import { getSource } from '~assets';

const Tab = createBottomTabNavigator();

export const MainScreen: React.FC<any> = (props, {navigation}) => {
  const {} = props;

  return (
    <Tab.Navigator>
      <Tab.Screen name="InfoBlowScreen" component={InfoBlowScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 2.55, height: size * 2.2,}}
            source={focused ? getSource('INFO') : getSource('INFO_FOCUSED')}
          />
        );
      },}} />
      <Tab.Screen name="BlowScreen" component={BlowScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 3, height: size * 2.35,}}
            source={focused ? getSource('BLOW') : getSource('BLOW_FOCUSED')}
          />
        );
      },}} />
      <Tab.Screen name="QuantityScreen" component={QuantityScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 3, height: size * 3.2,  transform: [{scale: 0.7}]}}
            source={focused ? getSource('QUANTITY') : getSource('QUANTITY_FOCUSED')}
          />
        );
      },}} />

      <Tab.Screen name="QuantityComfirmScreen" component={QuantityComfirmScreen} options={{ title: '', headerShown: false, tabBarIcon: ({size, focused}) => {
        return (
          <Image
            style={{width: size * 3.75, height: size * 2.2  ,}}
            source={focused ? getSource('QUANTITYCOMFIRM') : getSource('QUANTITYCOMFIRM_FOCUSED')}
          />
        );
      },}} />
    </Tab.Navigator>
  );
};