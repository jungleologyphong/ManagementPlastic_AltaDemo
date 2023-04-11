import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  containerIdStaff: {
    flexDirection: 'row', 
    marginTop: 16, 
    alignItems: 'center'
  },
  containerRow: {
    flexDirection: 'row'
  },
  containerColumn: { 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  containerColumn2: { 
    justifyContent: 'center', 
    flexDirection: 'column', 
    marginLeft: 24
  },
  containerScrollview: {
    flex: 1, 
    marginLeft: 24, 
    marginBottom: 24
  },
  containerModal: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: hp('100%')
  },
  containerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    height: hp('25%'),
    width: wp('35%'),
    borderRadius: wp('0.8%'),
    borderWidth: 3,
    borderColor: '#F7F7F7',
    backgroundColor: 'white'
  },
  containerRefuse: {
    flexDirection: 'column',
    alignItems: 'center',
    height: hp('47%'),
    width: wp('35%'),
    borderRadius: wp('0.8%'),
    borderWidth: 3,
    borderColor: '#F7F7F7',
    backgroundColor: 'white'
  },
  content3: {
    textAlign: 'center',
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '900', 
    fontSize: 15, 
    lineHeight: 30,
    color: '#333333', 
    marginTop: 16
  },
  textInputRefuse: {
    alignSelf: 'flex-start',
    textAlignVertical: 'top',
    borderWidth: 3,
    borderColor: '#F7F7F7',
    borderRadius: 8,
    width: wp('32%'),
    height: hp('25%'),
    marginLeft: 16,
    marginTop: 16,
  },
  line: {
    marginTop: 16, 
    alignItems: 'center',
    width: wp('47%'),
    height: 1,
    backgroundColor: '#007173'
  },
  table: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 25, 
    width: wp('50%'), 
    height: hp('75%'), 
    margin: 25, 
  },
  margin: {
    margin: 24
  },
  title: {
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '700', 
    fontSize: 24, 
    color: '#007173',
    marginTop: 24
  },
  titleRefuseRed: {
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '700', 
    fontSize: 24, 
    color: 'red',
    marginTop: 24
  },
  titleRefuse: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '900', 
    fontSize: 15, 
    lineHeight: 30,
    color: '#333333', 
    marginTop: 16,
    marginLeft: 16,
  },
  txtInfoStaff: {
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '900', 
    fontSize: 15, 
    color: '#333333'
  },
  txtInfoStaff2: {
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '600', 
    fontSize: 13, 
    color: '#333333', 
    marginLeft: 12
  },
  containerEdition: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width: wp('65%'),
    height: hp('62%'),
  },
  containerView: {
    flexDirection: 'row', 
    marginTop: 24
  },
  containerViewEdition: {
    flexDirection: 'column', 
    marginTop: 24
  },
  containerInfoLeft: {
    left: 0, 
    position: 'relative', 
    marginLeft: 25, 
    width: wp('30%'), 
  },
  containerInfoRight: {
    right: 0, 
    position: 'relative', 
    marginRight: 25,
    marginLeft: 25, 
    width: wp('30%'), 
  },
  containerAvatar: {
    alignItems: 'center'
  },
  containerEdit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontFamily: Font.LexendDeca_Thin, 
    fontStyle: 'normal', 
    fontWeight: '900', 
    fontSize: 15, 
    color: '#333333', 
    marginTop: 16
  },
  content2: {
    backgroundColor: '#F7F7F7', 
    borderRadius: 5, 
    width: wp('23%'),
    height: hp('5%'), 
    marginTop: 8, 
    justifyContent: 'center'
  },
  text: {
    margin: 10,
  },
  btnEdition: {
    backgroundColor: '#FEFEFE', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 35, 
    justifyContent:'center', 
    alignItems: 'center',
    margin: 15,
  },
  btnEditionSave: {
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#454545', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 35, 
    margin: 15,
  },
  btnEditionComfirm: {
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor: '#007173', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 35, 
    margin: 15,
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
  containerScrollView: {
    flex: 1,
  },
  containerBtnEdition: {
    marginTop: 10,
    flexDirection: 'row', 
    justifyContent:'center'
  }
});
