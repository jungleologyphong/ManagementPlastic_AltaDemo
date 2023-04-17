/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';
import {View, Text, Image, TextInput, Modal, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './LoginScreen.styles';
import {getSource} from '~assets';
import {FlatButton} from '~components';
import { LoginScreenLogic } from './LoginScreen.Logic';
import CheckBox from '@react-native-community/checkbox';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const ModalLogin : React.FC<any> = (props) => {
  const {fullname, idStaff, birthday, type, showModal} = props;
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.containerModal}>
        <View style={styles.containerInfo}>
          <Image source={getSource('LOGINSUCCESS')} style={styles.loginSuccess} />
          <Image source={getSource('AVATAR')} style={styles.avatar} />
          <Text style={styles.fullname}>{fullname}</Text>
          <View style={styles.containerInfomation}>
            <View style={styles.containerBottom}>
              <Text style={styles.titleInfo}>Mã công nhân</Text>
              <Text style={styles.titleContent}>{idStaff}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.containerBottom}>
              <Text style={styles.titleInfo}>Mã công nhân</Text>
              <Text style={styles.titleContent}>{birthday}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.containerBottom}>
              <Text style={styles.titleInfo}>Mã công nhân</Text>
              <Text style={styles.titleContent}>{type}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const LoginScreen: React.FC<any> = (props) => {
  const {} = props;
  const {isShowModal, setIsShowModal, isChecked, setChecked, checkDarkMode, payload, setPayload, toggleDarkMode, handleLogin} = LoginScreenLogic();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={checkDarkMode ? styles.containerBlack : styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.describe}>Sign in and start managing your plastic</Text>
        <TextInput style={styles.textInput}
          placeholder="example@example.com"
          placeholderTextColor={'#FFFFFF'}
          onChangeText={(tx: string) => setPayload({...payload, username: tx})}/>
        <TextInput style={styles.textInput}
          placeholder="****** (A-Z,a-z,0-9)"
          placeholderTextColor={'#E6E6FA'}
          secureTextEntry={true}
          onChangeText={(tx: string) => setPayload({...payload, password: tx})}/>
        <View style={styles.containerRemember}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox    
              value={isChecked}
              onValueChange={(value) => setChecked(value)}
              style={styles.checkbox}/>
            <Text style={styles.rember}>Remember me</Text>
          </View>
          
          <Text onPress={() => 
            console.log('Forgot Password')} style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            handleLogin(); 
            navigation.navigate('MainScreen');
            setIsShowModal(true);
            setTimeout(() => {
              setIsShowModal(false);
            }, 5000);
          }}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <ModalLogin fullname={'Hà Anh Tuấn'} idStaff={'CN01'} birthday={'27/05/1992'} type={'Thổi'} showModal={isShowModal} />
      <Image source={getSource('LINELIGHT')} style={styles.lineLight}/>
      <ImageBackground  source={getSource('DARKMODE')} style={styles.darkMode}>
        <FlatButton onPress={toggleDarkMode}/>
      </ImageBackground>
    </View>
  );
};


