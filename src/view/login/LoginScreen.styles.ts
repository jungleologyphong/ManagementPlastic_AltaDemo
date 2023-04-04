import { FlatButton } from './../../components/button/FlatButton';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  containerBlack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#009999',
  },
  containerForm:{
    position:'absolute',
    top: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('40%'),
    width: wp('40%'),
  },
  containerRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('30%'),
    margin: hp('2%'),
  },
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  containerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    height: hp('72%'),
    width: wp('45%'),
    borderRadius: wp('0.8%'),
    backgroundColor: 'white'
  },
  containerInfomation: {
    flexDirection: 'row',
  },
  containerBottom: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: hp('5%'),
  },
  title: {
    fontSize: wp('6%'),
    marginVertical: hp('2%'),
    color: '#224957',
    fontFamily: Font.LexendDeca_Bold
  },
  describe:{
    fontSize: wp('1.5%'),
    color: '#224957',
    fontFamily: Font.LexendDeca_Bold,
    margin: hp('2%'),
  },
  textInput: {
    height: hp('7%'),
    width: wp('30%'),
    margin: hp('2%'),
    padding: hp('2%'),
    borderRadius: wp('0.8%'),
    backgroundColor: '#224957',
    color: '#FFFFFF',
    fontFamily: Font.LexendDeca_Bold,
    fontSize: wp('1%'),
  },
  flatButton: {
    height: hp('7%'),
    width: wp('30%'),
    margin: hp('2%'),
    padding: hp('2%'),
    borderRadius: wp('0.8%'),
    backgroundColor: '#20DF7F',
    color: '#20DF7F',
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: Font.LexendDeca_Regular,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'black',
    fontSize: wp('1.25%'),
  },
  checkbox: {
    left: 0,
  },
  forgotPassword: {
    position:'absolute',
    right: 0,
    fontSize: wp('1%'),
    color: '#224957',
    fontFamily: Font.LexendDeca_Black
  },
  rember: {
    fontSize: wp('1%'),
    color: '#224957',
    fontFamily: Font.LexendDeca_Black
  },
  lineLight: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('20%'),
    bottom: 0,
  },
  darkMode: {
    position: 'absolute',
    width: wp('5%'),
    height: hp('10%'),
    bottom: hp('1.5%'),
    left: wp('1.5%'),
  },
  loginSuccess: {
    width: wp('20%'),
    height: hp('7%'),
    margin: hp('7%')
  },
  avatar: {
    position: 'relative',
    width: wp('11%'),
    height: hp('21%'),
    marginBottom: hp('1%')
  },
  fullname: {
    fontFamily: Font.LexendDeca_Regular,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#001C1D',
    fontSize: wp('2%'),
    marginBottom: hp('10%')
  },
  titleInfo: {
    fontFamily: Font.LexendDeca_Regular,
    fontStyle: 'normal',
    color: '#858585',
    fontSize: wp('1.25%'),
  },
  titleContent: {
    fontFamily: Font.LexendDeca_Regular,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#333333',
    fontSize: wp('2%'),
  },
  line: {
    width: 5,
    height: 50,
    backgroundColor: '#D9D9D9',
  }
});
