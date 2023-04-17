import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  containerFilter: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'center', 
    marginTop: 50, 
    marginBottom: 35
  },
  containerDateFilter2: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 30
  },
  containerBtnDate : {
    padding: 15, 
    justifyContent:'center', 
    borderWidth: 2, 
    borderRadius: 5, 
    borderColor: '#E0E0E0', 
    width: 300, 
    height: 50
  },
  containerDatePicker: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  txtDate: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 23,
    color: '#007173',
    marginRight: 10,
  },
  txtDatePicker: {
    width: 250, 
    height: 18, 
    fontSize: 13, 
    color: '#A3A3A3'
  },
  containerDropDown: {
    zIndex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  dropdown: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: '#E0E0E0', 
    width: 300
  },
});