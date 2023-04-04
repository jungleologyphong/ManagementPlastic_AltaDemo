import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {CodePushSelector} from '~modules/setting/settingStore';
import {Splash, Auth, LoginScreen, DeviceScreen, MainScreen, InfoScreen, MaterialScreen, QuantityScreen} from '~view';
import {navigationRef} from '~core/helper/navigate';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();
const privateScreen: any[] = [Auth];

console.log('Config', Config);

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
                <Stack.Screen name="DeviceScreen" component={DeviceScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MaterialScreen" component={MaterialScreen} options={{ headerShown: false }} />
                <Stack.Screen name="QuantityScreen" component={QuantityScreen} options={{ headerShown: false }} />
              </>
            );
          })
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainRouter);
