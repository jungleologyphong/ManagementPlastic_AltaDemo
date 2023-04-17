import React from 'react';
import {View} from 'react-native';
import {HeaderCustomizeView} from '~components';
import {FlatlistCustomize} from '~components/flatlistcustomize';
import {BlowScreenLogic} from './BlowScreen.Logic';

export const BlowScreen: React.FC<any> = props => {
  const {} = props;

  const {dataBlow} = BlowScreenLogic();
  
  return (
    <View>
      <HeaderCustomizeView title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} type={'Normal'} />
      <FlatlistCustomize
        titleColumn1={'Cuộn số'}
        titleColumn2={'Phần trăm đánh giá'}
        typeFlatlist={'CheckBlow'}
        titleParams={'KIỂM TRA CHẤT LƯỢNG THỔI IN'} 
        typeHeaders={'Normal'}
        dataParams={dataBlow} />
    </View>
  );
};
