import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './Auth.styles';
import {AuthLogic} from './Auth.logic';
import {FlatButton, FullScreenLoadingIndicator} from '~components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import authPresenter from '~modules/authentication/presenter';
import {useSingleAsync, useAltaIntl} from '~core/helper';
import settingStore from '~modules/setting/settingStore';
import {Font} from '~assets/fonts';
export const Auth: React.FC<any> = props => {
  const {} = props;
  const {translate} = useAltaIntl();
  const {dispatch, language, time, test} = AuthLogic();
  const {login} = authPresenter;
  const signInBySingleAsync = useSingleAsync(login);
  const a = () => {
    dispatch(
      settingStore.actions.updateLanguage(language === 'vi' ? 'en' : 'vi'),
    );
  };
  const [payload, setPayload] = useState({
    username: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: '90%',
          height: heightPercentageToDP(7),
          marginVertical: hp(2),
          borderWidth: 1,
        }}
        onChangeText={(tx: string) => setPayload({...payload, username: tx})}
        testID={'email'}
      />
      <TextInput
        style={{
          width: '90%',
          height: heightPercentageToDP(7),
          borderWidth: 1,
        }}
        onChangeText={(tx: string) => setPayload({...payload, password: tx})}
        textContentType="password"
        secureTextEntry={true}
        testID={'password'}
      />
      <FlatButton
        onPress={() => {
          signInBySingleAsync
            ?.execute({
              deviceUserName: 'ALTA_A1',
              devicePassword: 'Alta@2021',
            })
            ?.then(res => {
              console.log('res', res, signInBySingleAsync.status);
            })
            .catch(err => console.log('err', err));
        }}
        title="SUBMIT"
        containerStyle={{
          width: wp(30),
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'orange',
          backgroundColor: 'white',
        }}
      />
      <TouchableOpacity onPress={() => a()}>
        <Text style={{fontFamily: Font.GothicA1_Bold}}>Translate</Text>
        <Text>Translate</Text>
      </TouchableOpacity>

      <Text style={styles.txt}>{translate('welcome')}</Text>
      <FullScreenLoadingIndicator
        visible={signInBySingleAsync?.status === 'loading'}
      />
    </View>
  );
};
