import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Font } from "~assets/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerGrid: {
    width: wp(50),
  },
  containerRow: {
    width: wp(50), 
    zIndex: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerViewRow: {
    flexDirection:'row', 
    marginLeft: 15
  },
  title: {
    fontFamily: Font.LexendDeca_Thin, 
    fontWeight: '700', 
    fontSize: 18, 
    lineHeight: 35
  },
  dotRed: {
    width: 16, 
    height: 16, 
    backgroundColor: 'red', 
    borderRadius: 20
  },
  content: {
    fontFamily: Font.LexendDeca_Thin, 
    fontWeight: '200', 
    fontSize: 18, 
    lineHeight: 35,
  },
  content2: {
    fontFamily: Font.LexendDeca_Thin, 
    fontWeight: '700', 
    fontSize: 18, 
    lineHeight: 35,
    color: '#EFA73C'
  },
  content3: {
    fontFamily: Font.LexendDeca_Thin,
    fontWeight: '200', 
    fontSize: 18, 
    lineHeight: 35, 
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row'
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column', 
    marginLeft: 55
  },
  column2: {
    flexDirection: 'column'
  },
  box: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    shadowColor: 'black',
    margin: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  img: {
    transform: [{scale: 1}], 
    margin: 15
  }
});
  