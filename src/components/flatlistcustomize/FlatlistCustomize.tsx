import React, {useCallback, useEffect, useState} from 'react';
import {View, TextProps, TouchableOpacity, Text, Image, FlatList, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { getSource } from '~assets';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './FlatlistCustomize.Style';
import {useNavigation} from '@react-navigation/native';
export interface FlatListCustomizeProps extends TextProps {
    titleParams ? : string,
    titleHeaders ? : string,
    typeHeaders ? : string,
    headersParams ? : string[];
    dataParams ? : [];
}

export const FlatlistCustomize: React.FC<any> = (props) => {
  const {headersParams, titleParams, typeFlatlist, dataParams} = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [unFocus, setUnFocus] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openDropdownShift, setOpenDropdownShift] = useState(false);
  const [openDropdownMachine, setOpenDropdownMachine] = useState(false);

  const [date, setDate] = useState(new Date('2023-01-01'));
  const [value, setValue] = useState('Default');

  const navigation = useNavigation();
  
  const formattedDate = date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const FilterComponents : React.FC<any> = () => {
    return (
      <View style={styles.containerFilter}>
        <View style={styles.containerDateFilter}>
          <Text style={styles.txtDate}>Ngày</Text>
          <TouchableOpacity onPress={() => { setOpenDatePicker(true); } } style={styles.containerBtnDate}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ width: 250, height: 18, fontSize: 13, color: '#A3A3A3' }}>{' ' + formattedDate}</Text>
              <Image source={getSource('CALENDAR')} />
              <DatePicker modal date={date} open={openDatePicker} onConfirm={(date) => { setOpenDatePicker(false); setDate(date); } } onCancel={() => { setOpenDatePicker(false); } } />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
          <Text style={styles.txtDate}>Ca</Text>
          <View style={{ zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DropDownPicker
              style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#E0E0E0', width: 300 }}
              placeholder='Chọn ca...'
              open={openDropdownShift}
              value={value}
              items={shiftObjects}
              setOpen={setOpenDropdownShift}
              setValue={setValue}
              schema={{
                label: 'shift',
                value: 'shift'
              }} />
          </View>
        </View>
      </View>
    );
  };

  const filterDataByDateShift = (dataParams: [], selectedDate: string, selectedShift: string) => {
    return dataParams.filter(items => {
      return items.date === selectedDate && items.shift === selectedShift;
    });
  };

  const uniqueShifts = dataParams.reduce((acc: any[], current: [{shift: 'Default'}]) => {
    if (!acc.includes(current.shift)) {
      acc.push(current.shift);
    }
    return acc;
  }, []);

  const shiftObjects = uniqueShifts.map((shift: string) => {
    return { shift: shift };
  });

  const defaultShift = { shift: 'Default' };
  shiftObjects.unshift(defaultShift);

  const loadData = () => {
    setData(dataParams);
    setUnFocus(!unFocus);
    setFilterData(filterDataByDateShift(dataParams, formattedDate, value));
  };

  useEffect(() => {
    loadData();
  }, [dataParams, formattedDate, value]);

  return (
    typeFlatlist === 'Normal' ? <>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <FilterComponents />
          <View style={styles.row}>
            {headersParams.map((header: string, index: number) => (
              <Text key={index} style={styles.header}>
                {header}
              </Text>
            ))}
          </View>
          <FlatList
            nestedScrollEnabled={true}
            data={ value === 'Default' ? data.slice((page - 1) * 5, page * 5) : filterData}
            renderItem={({ item }) => (
              <View style={styles.rowData}>
                {Object.keys(item).map((key, index) => (
                  <Text key={index} style={styles.cell}>
                    {item[key]}
                  </Text>
                ))}
              </View>
            )} keyExtractor={(item, index) => index.toString()} />
          <View style={styles.containerPagination}>
            <TouchableOpacity onPress={() => setPage(page - 1)}>
              <Text style={styles.btnPrevious}>{'<'}</Text>
            </TouchableOpacity>
            {Array(Math.ceil(data.length / 5))
              .fill(data)
              .map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.paginationItem,
                    page === index + 1 && styles.paginationItemSelected,
                  ]}
                  onPress={() => setPage(index + 1)}>
                  <Text style={[styles.txtPage, page === index + 1 && styles.txtPageFocused]}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            <TouchableOpacity onPress={() => setPage(page + 1)}>
              <Text style={styles.btnNext}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </> : <>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.titleParams}>{titleParams}</Text>
          <FilterComponents />
          <Text style={styles.text}>Máy thổi</Text>
          <DropDownPicker
            style={{borderWidth: 1, borderRadius: 5, borderColor: '#E0E0E0', width: 200, marginTop: 10}}
            placeholder='Chọn ca...'
            open={openDropdownMachine}
            value={value}
            items={shiftObjects}
            setOpen={setOpenDropdownMachine}
            setValue={setValue}
            schema={{
              label: 'shift',
              value: 'shift'
            }} />
          <Text style={styles.text2}>Đánh giá</Text>
          <View style={styles.row}>
            {headersParams.map((header: string, index: number) => (
              <Text key={index} style={styles.header}>
                {header}
              </Text>
            ))}
          </View>
          {data === null ? 
          <>
            <FlatList
              nestedScrollEnabled={true}
              data={ value === 'Default' ? data.slice((page - 1) * 5, page * 5) : filterData}
              renderItem={({ item }) => (
                <View style={styles.rowData}>
                  {Object.keys(item).map((key, index) => (
                    <Text key={index} style={styles.cell}>
                      {item[key]}
                    </Text>
                  ))}
                </View>
              )} keyExtractor={(item, index) => index.toString()} />
          </>
          : 
          <>
            <View></View>
          </>}
          <View style={styles.containerBtnEdition}>
            <TouchableOpacity style={styles.btnEditionSave}>
              <Text style={styles.txtBtnSave}>Thêm cuộn</Text>
            </TouchableOpacity>
            <View style={styles.btnEdition}>
              <Text style={styles.txtBtnCancel}>0%</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};