import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {CodePushSelector} from '~modules/setting/settingStore';
import {Splash, Auth, LoginScreen, MainScreen, InfoScreen, InfoBlowScreen, BlowScreen, QuantityComfirmScreen, QuantityScreen} from '~view';
import {navigationRef} from '~core/helper/navigate';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();
const privateScreen: any[] = [Auth];

const MainRouter = () => {
  const {splash} = useSelector(CodePushSelector);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!splash ? (
          <Stack.Screen name="SplashScreen" component={Splash} />
        ) : (
          privateScreen.map((res: any) => {
            return(
              <>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />                
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BlowScreen" component={BlowScreen} options={{ headerShown: false }} />
                <Stack.Screen name="QuantityScreen" component={QuantityScreen} options={{ headerShown: false }} />
                <Stack.Screen name="QuantityComfirmScreen" component={QuantityComfirmScreen} options={{ headerShown: false }} />
                <Stack.Screen name="InfoBlowScreen" component={InfoBlowScreen} options={{ headerShown: false }} />
              </>
            );
          })
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainRouter);
