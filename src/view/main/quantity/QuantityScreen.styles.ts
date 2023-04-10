import { StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
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
});
