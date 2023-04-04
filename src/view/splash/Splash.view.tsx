import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Splash.styles';
import {SplashLogic} from './Splash.logic';
import {getSource} from '~assets';
import {name} from '~config';
import Config from 'react-native-config';
export const Splash: React.FC<any> = props => {
  const {} = props;
  const {label} = SplashLogic();

  console.log('Config', Config);

  return (
    <View style={styles.container}>
      <Image source={getSource('LOGO')} style={styles.img} />
      <Text style={styles.txt}>{label + name}</Text>
    </View>
  );
};
