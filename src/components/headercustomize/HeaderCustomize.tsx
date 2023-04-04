import React from 'react';
import {View, StyleSheet, TextProps, TouchableOpacity, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import { Font } from '~assets/fonts';
import { getSource } from '~assets';

export interface HeaderProps extends TextProps {
    type ?: string;
    title ?: string,
}

export const HeaderCustomize: React.FC<HeaderProps> = props => {
  const {type} = {...props};
  if (type === 'Infomation') {
    return <HeaderInfomation {...props} />;
  } else if (type === 'Normal') {
    return <HeaderNormal {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderInfomation: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const {title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerComponent}>
        <TouchableOpacity style={styles.containerLeft} onPress={() => navigation.goBack()}>
          <Image source={getSource('BACK')}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.containerRight} onPress={() => console.log('Signout')}>
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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerComponent}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.containerRight} onPress={() => navigation.goBack()}>
          <View style={styles.rightAvatar}>
            <Image style={styles.img} source={getSource('AVATARHEADER')}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HeaderCommon: React.FC<any> = (props) => {
  const {} = props;
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: wp('100%'),
    height: wp('5%'),
    backgroundColor: '#FFFFFF'
  },
  containerComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    position: 'absolute',
    right: wp('2%'),
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: '#007173',
    borderRadius: 6,
    padding: 10,
  },
  rightAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerLeft: {
    position: 'absolute',
    left: wp('2%'),
  },
  img: {
    marginRight: 10,
    marginLeft: 12,
  },
  text: {
    flexGrow: 0,
    fontFamily: Font.LexendDeca_Thin,
    fontSize: wp('1%'),
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#007173', 
    marginRight: 12,
  },
  title: {
    fontFamily: Font.LexendDeca_Thin,
    fontSize: 25,
    fontWeight: '700',
    display: 'flex',
    color: '#007173',
    alignItems: 'center',
    textAlign: 'center',
  }
});

