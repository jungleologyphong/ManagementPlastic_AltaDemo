import React from 'react';
import {View} from 'react-native';
import {HeaderCustomizeView} from '~components';
import {FlatlistCustomize} from '~components/flatlistcustomize/FlatlistCustomize.View';
import {QuantityScreenLogic} from './QuantityScreen.Logic';
import { styles } from './QuantityScreen.styles';

export const QuantityScreen: React.FC<any> = props => {
  const {} = props;
  const {shiftData, data} = QuantityScreenLogic();

  return (
    <><HeaderCustomizeView type={'Normal'} title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} />
      <View style={styles.container}>
        <FlatlistCustomize
          dataLine={5}
          titleColumn1={'Ngày kiểm tra'}
          titleColumn2={'Họ và tên'}
          titleColumn3={'Ca'}
          typeFlatlist={'Normal'}
          titleParams={'DANH SÁCH BÁO CÁO SẢN LƯỢNG THỔI CẦN XÁC NHẬN'}
          dataParams={data}
          dropdownParams={shiftData} />
      </View>
    </>
  );
};
