import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: wp(25),
    height: wp(25) * 1.21875,
    marginBottom: hp(2),
  },
  txt: {
    color: 'black',
    fontSize: wp(4),
  },
});
