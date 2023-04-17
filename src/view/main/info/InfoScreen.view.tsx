import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import {styles} from './InfoScreen.styles';
import { HeaderCustomizeView } from '~components';
import { getSource } from '~assets';
import { InfoScreenLogic } from './InfoScreen.Logic';

const data = {
  idStaff: 'CN01',
  fullname: 'Nguyễn Viết Anh Nguyên',
  group: 'Thổi',
  idGroup: 1,
  gender: 'Nữ',
  CMND: 124532145632,
  gmail: 'nguyen.nguyen@alta.com.vn',
  phone: '0954126514',
  date: '21/12/1993',
  address: '220/54/12 Âu Cơ, P.9, Q.Tân Bình, TP.Hồ Chí Minh'
};

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
  const {title, content} = props;
  return (
    <View style={styles.containerViewEdition}>
      <Text style={styles.title}>{title}{':'}{' '}</Text>
      <TextInput value={content} editable={false} onChangeText={(value) => console.log(value)} style={styles.textInput} />
    </View>
  );
};

export const InfoScreen : React.FC<any> = (props) => {
  const {} = props;
  //isEdited check layout
  const [isEdited, setEdited] = useState(true);
  const {dataUser} = InfoScreenLogic();
  const handleEdited = () => {
    setEdited(!isEdited);
  };
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
            <Infomation title={'Mã công nhân'} content={data.idStaff}/>
            <Infomation title={'Tên công nhân'} content={data.fullname}/>
            <Infomation title={'Tổ'} content={data.group}/>
            <Infomation title={'Nhóm'} content={data.idGroup}/>
            <Infomation title={'Giới tính'} content={data.gender}/>
          </View>
          <View style={styles.containerInfoRight}>
            <Infomation title={'CMND/CCCD'} content={data.CMND}/>
            <Infomation title={'Email'} content={data.gmail}/>
            <Infomation title={'Số điện thoại'} content={data.phone}/>
            <Infomation title={'Ngày sinh'} content={data.date}/>
            <Infomation title={'Địa chỉ'} content={data.address}/>
          </View>
        </View>
      </View>
    </View> : 
    //Layout 2
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
        <SafeAreaView style={styles.containerScrollView}>
          <ScrollView>
            <View style={styles.containerEdition}>
              <View style={styles.containerInfoLeft}>
                <Edtion title={'Mã công nhân'} content={data.idStaff} />
                <Edtion title={'Tên công nhân'} content={data.fullname} />
                <Edtion title={'Tổ'} content={data.group} />
                <Edtion title={'Nhóm'} content={data.idGroup + ''} />
                <Edtion title={'Giới tính'} content={data.gender} />
              </View>
              <View style={styles.containerInfoRight}>
                <Edtion title={'CMND/CCCD'} content={data.CMND + ''} />
                <Edtion title={'Email'} content={data.gmail} />
                <Edtion title={'Số điện thoại'} content={data.phone} />
                <Edtion title={'Ngày sinh'} content={data.date} />
                <Edtion title={'Địa chỉ'} content={data.address} />
              </View>
            </View>
            <View style={styles.containerBtnEdition}>
              <TouchableOpacity style={styles.btnEdition}>
                <Text style={styles.txtBtnCancel}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnEditionSave}>
                <Text style={styles.txtBtnSave}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};