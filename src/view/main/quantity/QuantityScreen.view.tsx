import React, { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import {View} from 'react-native';
import {HeaderCustomizeView} from '~components';
import {FlatlistCustomize} from '~components/flatlistcustomize/FlatlistCustomize.View';
import {QuantityScreenLogic} from './QuantityScreen.Logic';

export const QuantityScreen: React.FC<any> = props => {
  const {} = props;
  const {shiftData, data} = QuantityScreenLogic();

  return (
    <View>
      <HeaderCustomizeView type={'Normal'} title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} />
      <FlatlistCustomize
        titleColumn1={'Ngày kiểm tra'}
        titleColumn2={'Họ và tên'}
        titleColumn3={'Ca'}
        typeFlatlist={'Normal'}
        titleParams={'DANH SÁCH BÁO CÁO SẢN LƯỢNG THỔI CẦN XÁC NHẬN'} 
        dataParams={data}
        dropdownParams={shiftData} />
    </View>
  );
};
