import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: wp('100%'),
    height: wp('5%'),
    backgroundColor: '#FFFFFF'
  },
  containerComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    position: 'absolute',
    right: wp('2%'),
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: '#007173',
    borderRadius: 6,
    padding: 10,
  },
  rightAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerLeft: {
    position: 'absolute',
    left: wp('2%'),
  },
  img: {
    marginRight: 10,
    marginLeft: 12,
  },
  text: {
    flexGrow: 0,
    fontFamily: Font.LexendDeca_Thin,
    fontSize: wp('1%'),
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#007173', 
    marginRight: 12,
  },
  title: {
    fontFamily: Font.LexendDeca_Thin,
    fontSize: 25,
    fontWeight: '700',
    display: 'flex',
    color: '#007173',
    alignItems: 'center',
    textAlign: 'center',
  }
});