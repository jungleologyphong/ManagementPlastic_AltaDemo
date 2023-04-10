import React from 'react';
import {View, Text} from 'react-native';
import { HeaderCustomize } from '~components';
import { FlatlistCustomize } from '~components/flatlistcustomize';

export const BlowScreen: React.FC<any> = props => {
  const {} = props;
  const headers = ['Cuộn số', 'Phần trăm đánh giá'];
  const data = [{}];
  return (
    <View>
      <HeaderCustomize title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} type={'Normal'} />
      <FlatlistCustomize
        typeFlatlist={'CheckBlow'}
        titleParams={'KIỂM TRA CHẤT LƯỢNG THỔI IN'} 
        typeHeaders={'Normal'}
        headersParams={headers} 
        dataParams={data} />
    </View>
  );
};
