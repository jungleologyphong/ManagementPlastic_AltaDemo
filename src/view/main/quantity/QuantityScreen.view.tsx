import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {HeaderCustomize} from '~components';
import {FlatlistCustomize} from '~components/flatlistcustomize';

const headers = ['Ngày kiểm tra', 'Tên nhân viên', 'Ca'];

const data = [
  {
    date: '2023-04-04',
    fullname: 'Fullname 1',
    ca: 3,
  },
  {
    date: '2023-04-05',
    fullname: 'Fullname 2',
    ca: 2,
  },
  {
    date: '2023-04-06',
    fullname: 'Fullname 3',
    ca: 2,
  },
  {
    date: '2023-04-07',
    fullname: 'Fullname 4',
    ca: 1,
  },
  {
    date: '2023-04-08',
    fullname: 'Fullname 5',
    ca: 3,
  },
  {
    date: '2023-04-09',
    fullname: 'Fullname 6',
    ca: 1,
  },
  {
    date: '2023-04-10',
    fullname: 'Fullname 7',
    ca: 2,
  },
  {
    date: '2023-04-11',
    fullname: 'Fullname 8',
    ca: 3,
  },
  {
    date: '2023-04-12',
    fullname: 'Fullname 9',
    ca: 2,
  },
  {
    date: '2023-04-13',
    fullname: 'Fullname 10',
    ca: 1,
  },
  {
    date: '2023-04-14',
    fullname: 'Fullname 11',
    ca: 1,
  },
  {
    date: '2023-04-15',
    fullname: 'Fullname 12',
    ca: 3,
  },
  {
    date: '2023-04-16',
    fullname: 'Fullname 13',
    ca: 2,
  },
  {
    date: '2023-04-17',
    fullname: 'Fullname 14',
    ca: 2,
  },
  {
    date: '2023-04-18',
    fullname: 'Fullname 15',
    ca: 3,
  },
  {
    date: '2023-04-19',
    fullname: 'Fullname 16',
    ca: 1,
  },
  {
    date: '2023-04-20',
    fullname: 'Fullname 17',
    ca: 1,
  },
  {
    date: '2023-04-21',
    fullname: 'Fullname 18',
    ca: 2,
  },
  {
    date: '2023-04-22',
    fullname: 'Fullname 19',
    ca: 3,
  },
  {
    date: '2023-04-23',
    fullname: 'Fullname 20',
    ca: 2,
  },
  {
    date: '2023-04-24',
    fullname: 'Fullname 21',
    ca: 1,
  },
  {date: '2023-04-25', fullname: 'Fullname 22', ca: 3},
  {
    date: '2023-04-26',
    fullname: 'Fullname 23',
    ca: 2,
  },
  {
    date: '2023-04-27',
    fullname: 'Fullname 24',
    ca: 2,
  },
  {
    date: '2023-04-28',
    fullname: 'Fullname 25',
    ca: 1,
  },
  {
    date: '2023-04-29',
    fullname: 'Fullname 26',
    ca: 1,
  },
  {
    date: '2023-04-30',
    fullname: 'Fullname 27',
    ca: 3,
  },
  {
    date: '2023-05-01',
    fullname: 'Fullname 28',
    ca: 2,
  },
  {
    date: '2023-05-02',
    fullname: 'Fullname 29',
    ca: 2,
  },
  {
    date: '2023-05-03',
    fullname: 'Fullname 30',
    ca: 3,
  },
];

export const QuantityScreen: React.FC<any> = props => {
  const {} = props;
  return (
    <View>
      <FlatlistCustomize 
        titleParams={'DANH SÁCH BÁO CÁO SẢN LƯỢNG THỔI CẦN XÁC NHẬN'} 
        titleHeaders={'Túi Bio Bag 4 ly, màu trắng sứ, không nhám'}
        typeHeaders={'Normal'}
        headersParams={headers} 
        dataParams={data} />
    </View>
  );
};
