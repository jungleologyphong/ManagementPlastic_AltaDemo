import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  containerInfo: {
    height: hp('73.5%'),
    width: wp('50%'),
    borderRadius: wp('0.8%'),
    backgroundColor: 'white',
    shadowColor: 'black',
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  containerBody: {
    margin: 15,
  },
  containerBody2: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#007173',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 35,
  },
  containerBody3: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    marginTop: 10,
  },
  containerBtnEvaluate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 315,
  },
  containerRow: {
    marginTop: 5,
    flexDirection: 'row',
    width: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    marginVertical: 5,
    height: 1,
    backgroundColor: '#E0E0E0'
  },
  textModal1: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#FEFEFE',
    marginLeft: 16,
    width: 275
  },
  textModal2: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#FEFEFE',
    width: 200
  },
  textModal3: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#FEFEFE',
    width: 200
  },
  textModal4: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#FEFEFE',
    width: 200,
    marginLeft: 10,
  },
  textBtn: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#FEFEFE',
  },
  text2: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#007173',
    marginRight: 10,
    marginTop: 15,
  },
  text: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  text3: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },
  textCriteria: {
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#454545',
    width: 257,
    marginLeft: 16,
  },
  textData: {
    textAlign: 'center',
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    color: '#454545',
    width: 100,
  },
  btnEvaluate: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Font.LexendDeca_Thin,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    backgroundColor: '#007173',
    borderRadius: 5, 
    height: 35,
    width: 100,
  },
  textValidNumber: {
    padding: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C2C2C2',
    height: 35,
    width: 125,
  },
  textInput: {
    width: 175,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginVertical: 10,
  },
  btnModalCancel: {
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 40, 
    marginHorizontal: 10,
  },
  btnSave: {
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#007173', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 40, 
  },
  txtModalSave: {
    color: '#007173',
    fontWeight: '900'
  },
  txtBtnSave: {
    color: '#FFFFFF',
    fontWeight: '900'
  },
  txtBtnCancel: {
    color: '#007173',
    fontWeight: '900'
  },
})