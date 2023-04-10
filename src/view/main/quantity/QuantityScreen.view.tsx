import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {HeaderCustomize} from '~components';
import {FlatlistCustomize} from '~components/flatlistcustomize';

const headers = ['Ngày kiểm tra', 'Tên nhân viên', 'Ca'];

const data = [
  {
    date: '2023-04-04',
    fullname: 'Fullname 1',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-05',
    fullname: 'Fullname 2',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-06',
    fullname: 'Fullname 3',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-07',
    fullname: 'Fullname 4',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-08',
    fullname: 'Fullname 5',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-09',
    fullname: 'Fullname 6',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-10',
    fullname: 'Fullname 7',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-11',
    fullname: 'Fullname 8',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-12',
    fullname: 'Fullname 9',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-13',
    fullname: 'Fullname 10',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-14',
    fullname: 'Fullname 11',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-15',
    fullname: 'Fullname 12',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-16',
    fullname: 'Fullname 13',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-17',
    fullname: 'Fullname 14',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-18',
    fullname: 'Fullname 15',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-19',
    fullname: 'Fullname 16',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-20',
    fullname: 'Fullname 17',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-21',
    fullname: 'Fullname 18',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-22',
    fullname: 'Fullname 19',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-23',
    fullname: 'Fullname 20',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-24',
    fullname: 'Fullname 21',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-25', 
    fullname: 'Fullname 22', 
    shift: 'Ca 1',
  },
  {
    date: '2023-04-26',
    fullname: 'Fullname 23',
    shift: 'Ca 3',
  },
  {
    date: '2023-04-27',
    fullname: 'Fullname 24',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-28',
    fullname: 'Fullname 25',
    shift: 'Ca 2',
  },
  {
    date: '2023-04-29',
    fullname: 'Fullname 26',
    shift: 'Ca 1',
  },
  {
    date: '2023-04-30',
    fullname: 'Fullname 27',
    shift: 'Ca 3',
  },
  {
    date: '2023-05-01',
    fullname: 'Fullname 28',
    shift: 'Ca 2',
  },
  {
    date: '2023-05-02',
    fullname: 'Fullname 29',
    shift: 'Ca 2',
  },
  {
    date: '2023-05-03',
    fullname: 'Fullname 30',
    shift: 'Ca 1',
  },
];

export const QuantityScreen: React.FC<any> = props => {
  const {} = props;
  return (
    <View>
      <HeaderCustomize type={'Normal'} title={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'} />
      <FlatlistCustomize
        typeFlatlist={'Normal'}
        titleParams={'DANH SÁCH BÁO CÁO SẢN LƯỢNG THỔI CẦN XÁC NHẬN'} 
        typeHeaders={'Normal'}
        headersParams={headers} 
        dataParams={data} />
    </View>
  );
};
