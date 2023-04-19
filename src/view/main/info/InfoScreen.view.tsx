import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import {styles} from './InfoScreen.styles';
import { HeaderCustomizeView } from '~components';
import { getSource } from '~assets';
import { InfoScreenLogic } from './InfoScreen.Logic';
import localStorage from 'redux-persist/es/storage';

const Infomation : React.FC<any> = (props: { title: string; content: string; }) => {
  const {title, content} = props;
  return (
    <View style={styles.containerView}>
      <Text style={styles.title}>{title}{':'}{' '}</Text>
      <Text numberOfLines={2} ellipsizeMode="middle" style={styles.content}>{content}</Text>
    </View>
  );
};

const Edtion : React.FC<any> = (props) => {
  const {title, content, setValuesField} = props;

  return (
    <View style={styles.containerViewEdition}>
      <Text style={styles.title}>{title}{':'}{' '}</Text>
      <TextInput defaultValue={content} onChangeText={(text) => setValuesField(text)} style={styles.textInput} />
    </View>
  );
};

export const InfoScreen : React.FC<any> = (props) => {
  const {} = props;
  const {isEdited, handleEdited, formData, handleFieldChange, setIdStaff, setFullname, setGroup, setIdGroup, setGender, setCMND, setGmail, setAddress, setPhone, setDate, newData, checkEditInfo} = InfoScreenLogic();
  //isEdited check layout
  return (
    isEdited ?
    //Layout 1
    <View style={styles.superContainer}>
      <HeaderCustomizeView type='Infomation' title='Thông tin cá nhân'  />
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Image style={styles.avatarInfomation} source={getSource('AVATARINFOMATION')} />
          <View style={styles.containerEdit}>
            <TouchableOpacity onPress={() => handleEdited()}>
              <Image source={getSource('EDIT')} />
            </TouchableOpacity>
            <Text style={styles.txtEdit}>Chỉnh sửa thông tin</Text>
          </View>
        </View>
        <View style={styles.containerInfomation}>
          <View style={styles.containerInfoLeft}>
            <Infomation title={'Mã công nhân'} content={!checkEditInfo ? formData.idStaff : newData.idStaff} />
            <Infomation title={'Tên công nhân'} content={!checkEditInfo ? formData.fullname : newData.fullname} />
            <Infomation title={'Tổ'} content={!checkEditInfo ? formData.group : newData.group}/>
            <Infomation title={'Nhóm'} content={!checkEditInfo ? formData.idGroup + '' : newData.idGroup + ''} />
            <Infomation title={'Giới tính'} content={!checkEditInfo ? formData.gender : newData.gender} />
          </View>
          <View style={styles.containerInfoRight}>
            <Infomation title={'CMND/CCCD'} content={!checkEditInfo ? formData.CMND + '' : newData.CMND + ''} />
            <Infomation title={'Email'} content={!checkEditInfo ? formData.gmail : newData.gmail} />
            <Infomation title={'Số điện thoại'} content={!checkEditInfo ? formData.idStaff : newData.phone} />
            <Infomation title={'Ngày sinh'} content={!checkEditInfo ? formData.date : newData.date}/>
            <Infomation title={'Địa chỉ'} content={!checkEditInfo ? formData.address : newData.address} name={'idStaff'}/>
          </View>
        </View>
      </View>
    </View> : 
    //Layout 2
    <View style={styles.superContainer}>
      <HeaderCustomizeView type='Infomation' title='Thông tin cá nhân' />
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Image style={styles.avatarInfomation} source={getSource('AVATARINFOMATION')} />
          <View style={styles.containerEdit}>
            <TouchableOpacity onPress={() => handleEdited()}>
              <Image source={getSource('EDIT')} />
            </TouchableOpacity>
            <Text style={styles.txtEdit}>Chỉnh sửa thông tin</Text>
          </View>
        </View>
        <SafeAreaView style={styles.containerScrollView}>
          <ScrollView>
            <View style={styles.containerEdition}>
              <View style={styles.containerInfoLeft}>
                <Edtion title={'Mã công nhân'} content={!checkEditInfo ? formData.idStaff : newData.idStaff} name={'idStaff'} setValuesField={setIdStaff}  />
                <Edtion title={'Tên công nhân'} content={!checkEditInfo ? formData.fullname : newData.fullname} name={'fullname'} setValuesField={setFullname} />
                <Edtion title={'Tổ'} content={!checkEditInfo ? formData.group : newData.group} name={'group'} setValuesField={setGroup} />
                <Edtion title={'Nhóm'} content={!checkEditInfo ? formData.idGroup + '' : newData.idGroup + ''} name={'group'} setValuesField={setIdGroup} />
                <Edtion title={'Giới tính'} content={!checkEditInfo ? formData.gender : newData.gender} name={'gender'} setValuesField={setGender} />
              </View>
              <View style={styles.containerInfoRight}>
                <Edtion title={'CMND/CCCD'} content={!checkEditInfo ? formData.CMND + '' : newData.CMND + ''} name={'CMND'} setValuesField={setCMND} />
                <Edtion title={'Email'} content={!checkEditInfo ? formData.gmail : newData.gmail} name={'gmail'} setValuesField={setGmail} />
                <Edtion title={'Số điện thoại'} content={!checkEditInfo ? formData.phone : newData.phone} name={'phone'} setValuesField={setPhone} />
                <Edtion title={'Ngày sinh'} content={!checkEditInfo ? formData.date : newData.date} name={'date'} setValuesField={setDate} />
                <Edtion title={'Địa chỉ'} content={!checkEditInfo ? formData.address : newData.address} name={'address'} setValuesField={setAddress} />
              </View>
            </View>
            <View style={styles.containerBtnEdition}>
              <TouchableOpacity style={styles.btnEdition} onPress={() => handleEdited()}>
                <Text style={styles.txtBtnCancel}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnEditionSave} onPress={() => {handleFieldChange(); handleEdited()}}>
                <Text style={styles.txtBtnSave}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};