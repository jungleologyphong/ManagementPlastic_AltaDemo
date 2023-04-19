import firebase from '@react-native-firebase/app';

const androidCredentials = {
  apiKey: 'AIzaSyDn76z8cT_80SuaafCsRCPuQXObB1JATB4',
  authDomain: 'managementplastic-ba314.firebaseapp.com',
  databaseURL: 'https://managementplastic-ba314-default-rtdb.firebaseio.com',
  projectId: 'managementplastic-ba314',
  storageBucket: 'managementplastic-ba314.appspot.com',
  messagingSenderId: '766044046513',
  appId: '1:766044046513:web:6b031e645d8cc22c74ce90',
  measurementId: 'G-WW6CS6NC6C'
};
  
const config = {
  name: 'ManagementPlastic',
};
  
export default firebase.initializeApp(androidCredentials, config);