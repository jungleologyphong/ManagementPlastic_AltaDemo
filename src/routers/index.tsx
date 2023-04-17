import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {CodePushSelector} from '~modules/setting/settingStore';
import {Splash, LoginScreen, MainScreen, InfoScreen, InfoBlowScreen, BlowScreen, QuantityScreen} from '~view';
import {navigationRef} from '~core/helper/navigate';
import { TokenSelector } from '~modules/authentication';



const Stack = createNativeStackNavigator();
const privateScreen: any[] = [LoginScreen];

const MainRouter = () => {
  const {splash} = useSelector(CodePushSelector);
  const {token} = useSelector(TokenSelector);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!splash ? (
            <Stack.Screen name="SplashScreen" component={Splash} />
        ) : (
          privateScreen.map((res: any) => {
            return(
              <>
                {!token ? (
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              ) : (
              <>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BlowScreen" component={BlowScreen} options={{ headerShown: false }} />
                <Stack.Screen name="QuantityScreen" component={QuantityScreen} options={{ headerShown: false }} />
                <Stack.Screen name="InfoBlowScreen" component={InfoBlowScreen} options={{ headerShown: false }} /></>
              )
                }
              </>
            );
          })
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainRouter);
