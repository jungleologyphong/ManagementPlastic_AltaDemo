import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import {styles} from './InfoScreen.styles';
import { HeaderCustomizeView } from '~components';
import { getSource } from '~assets';
import { InfoScreenLogic } from './InfoScreen.Logic';

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
  const {isEdited, handleEdited, formData} = InfoScreenLogic();
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
            <Infomation title={'Mã công nhân'} content={formData.idStaff} />
            <Infomation title={'Tên công nhân'} content={formData.fullname} />
            <Infomation title={'Tổ'} content={formData.group}/>
            <Infomation title={'Nhóm'} content={formData.idGroup + ''} />
            <Infomation title={'Giới tính'} content={formData.gender} />
          </View>
          <View style={styles.containerInfoRight}>
            <Infomation title={'CMND/CCCD'} content={formData.CMND + ''} />
            <Infomation title={'Email'} content={formData.gmail} />
            <Infomation title={'Số điện thoại'} content={formData.phone} />
            <Infomation title={'Ngày sinh'} content={formData.date }/>
            <Infomation title={'Địa chỉ'} content={formData.address}/>
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
                <Edtion title={'Mã công nhân'} content={formData.idStaff} />
                <Edtion title={'Tên công nhân'} content={formData.fullname} />
                <Edtion title={'Tổ'} content={formData.group}/>
                <Edtion title={'Nhóm'} content={formData.idGroup + ''} />
                <Edtion title={'Giới tính'} content={formData.gender } />
              </View>
              <View style={styles.containerInfoRight}>
                <Edtion title={'CMND/CCCD'} content={formData.CMND + '' } />
                <Edtion title={'Email'} content={formData.gmail} />
                <Edtion title={'Số điện thoại'} content={formData.phone} />
                <Edtion title={'Ngày sinh'} content={formData.date} />
                <Edtion title={'Địa chỉ'} content={formData.address} />
              </View>
            </View>
            <View style={styles.containerBtnEdition}>
              <TouchableOpacity style={styles.btnEdition} onPress={() => handleEdited()}>
                <Text style={styles.txtBtnCancel}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnEditionSave} onPress={() => {handleEdited()}}>
                <Text style={styles.txtBtnSave}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};