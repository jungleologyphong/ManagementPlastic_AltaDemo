import React from 'react';
import {View, TextProps, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getSource} from '~assets';
import {styles} from './HeaderCustomize.Styles';
import settingStore from '~modules/setting/settingStore';
import { useDispatch } from 'react-redux';
import profileStore from '~modules/authentication/profileStore';
import store from '~core/store';

export interface HeaderProps extends TextProps {
    type ?: string;
    title ?: string,
}

export const HeaderCustomizeView: React.FC<HeaderProps> = props => {
  const {type} = {...props};
  if (type === 'Infomation') {
    return <HeaderInfomation {...props} />;
  } else if(type === 'Normal') {
    return <HeaderNormal {...props} />;
  }
};

const HeaderInfomation: React.FC<HeaderProps> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {title} = props;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerLeft} onPress={() => navigation.goBack()}>
          <Image source={getSource('BACK')}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.containerRight} onPress={() => {
          navigation.navigate('LoginScreen');
          store.dispatch(profileStore.actions.logOut());
          dispatch(settingStore.actions.setSplash(false));
        }}>
          <View style={styles.right}>
            <Image style={styles.img} source={getSource('SIGNOUT')}></Image>
            <Text style={styles.text}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

const HeaderNormal: React.FC<any> = (props) => {
  const {title, pathImage} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.containerComponent}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.containerRight} onPress={() => navigation.goBack()}>
          <View style={styles.rightAvatar}>
            <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')}>
              <Image style={styles.img} source={getSource('AVATARHEADER')}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};