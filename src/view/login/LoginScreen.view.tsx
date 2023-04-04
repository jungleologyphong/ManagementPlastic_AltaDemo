import React, {useState} from 'react';
import {View, Text, Image, TextInput, Modal, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './LoginScreen.styles';
import CheckBox from '@react-native-community/checkbox';
import {getSource} from '~assets';
import { FlatButton } from '~components';

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

export const LoginScreen: React.FC<any> = ({navigation}, props) => {
  const {} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [checkDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!checkDarkMode);
  };

  return (
    <View style={checkDarkMode ? styles.containerBlack : styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.describe}>Sign in and start managing your plastic</Text>
        <TextInput style={styles.textInput}
          placeholder="example@example.com"
          placeholderTextColor={'#FFFFFF'}
          onChangeText={(text) => setUsername(text)}
          value={username}/>
        <TextInput style={styles.textInput}
          placeholder="****** (A-Z,a-z,0-9)"
          placeholderTextColor={'#E6E6FA'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}/>
        <View style={styles.containerRemember}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox    
              value={isChecked}
              onValueChange={(value) => setChecked(value)}
              style={styles.checkbox}/>
            <Text style={styles.rember}>Remember me</Text>
          </View>
          <Text onPress={() => console.log("Forgot Password")} style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            setIsShowModal(true);
            setTimeout(() => {
              setIsShowModal(false);
              navigation.navigate('MainScreen');
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


