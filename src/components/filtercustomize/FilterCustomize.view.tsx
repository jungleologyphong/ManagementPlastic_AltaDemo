import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './FilterCustomize.Styles';
import {FilterCustomizeLogic} from './FilterCustomize.Logic';
import {getSource} from '~assets';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

export const FilterCustomize : React.FC<any> = (props) => {
  const {dropdownParams} = props;

  const {openDatePicker, setOpenDatePicker, openDropdownShift, setOpenDropdownShift, date, setDate, formattedDate, value, setValue} = FilterCustomizeLogic();
  return (
    <View style={styles.containerFilter}>
      <View style={styles.containerDateFilter2}>
        <Text style={styles.txtDate}>Ngày</Text>
        <TouchableOpacity onPress={() => { setOpenDatePicker(true);}} style={styles.containerBtnDate}>
          <View style={styles.containerDatePicker}>
            <Text style={styles.txtDatePicker}>{' ' + formattedDate}</Text>
            <Image source={getSource('CALENDAR')} />
            <DatePicker modal date={date} open={openDatePicker} onConfirm={(date) => { setOpenDatePicker(false); setDate(date); } } onCancel={() => { setOpenDatePicker(false); } } />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDateFilter2}>
        <Text style={styles.txtDate}>Ca</Text>
        <View style={styles.containerDropDown}>
          <DropDownPicker
            style={styles.dropdown}
            placeholder='Chọn ca...'
            open={openDropdownShift}
            value={value}
            items={dropdownParams}
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
