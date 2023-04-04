import {StatusBar, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Font} from '~assets/fonts';

export const styles = StyleSheet.create({
  superContainer: {
    justifyContent: 'center', 
    alignItems:'center',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowRadius: 10,
    margin: 15,
    width: wp('65%'),
    borderRadius: 30,
    alignItems:'center',
  },
  containerInfomation: {
    flexDirection: 'row',
    marginTop: 10,
  },
  containerEdition: {
    flexDirection: 'column',
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
    fontFamily: Font.LexendDeca_Medium, 
    fontSize: 25, 
    fontWeight: '900', 
    color: '#005556', 
    textAlign: 'left',
    width: wp('25%')
  },
  title: {  
    fontFamily: Font.LexendDeca_Medium,  
    fontSize: 25, 
    fontWeight: '400', 
    color: '#4D4D4D',
  },
  txtEdit: {
    fontFamily: Font.LexendDeca_Medium, 
    fontSize: 25, 
    fontWeight: '400', 
    color: '#005556',
    marginHorizontal: 10,
    textDecorationLine: 'underline'
  },
  avatarInfomation: {
    margin: 20,
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
    backgroundColor: '#007173', 
    borderWidth: 1, 
    borderColor: '#007173',
    borderRadius: 8,
    width: 135, 
    height: 35, 
    margin: 15,
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
  textInput: {
    backgroundColor:'#F7F7F7',
    width: wp('30%'), 
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: Font.LexendDeca_Thin,  
    fontSize: 18, 
    fontWeight: '200', 
    color: '#4D4D4D',
  },
  containerBtnEdition: {
    flexDirection: 'row', 
    justifyContent:'center'
  }
});
