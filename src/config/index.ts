import {Platform} from 'react-native';
import Config from 'react-native-config';

export const name = Config.ENV || 'Dev';
export const env_set: any = {
  Dev: {
    mqtt: 'mqtt://vernemq.altacloud.biz:1883',
    clientId: '7a2a18d3-af9b-41e3-a55d-12f5d501c35e',
    API_BASE_URL: 'https://digitizing-sso-api.dev.altasoftware.vn/api',
    APP_NAME: 'MOBILE',
    fvers: '0.0.1',
    codePush: Platform.select({
      ios: {
        production: 'Niq-KUNKgapnzYLsH_uFqaJK0ROwDijayB9yZ',
      },
      android: {
        production: '_WUX0ebR9Ai-bsKtqxx1pE2H38llA5IvUyNuR',
      },
    }),
  },
  Pro: {
    mqtt: 'mqtt://vernemq.altacloud.biz:1883',
    clientId: '7a2a18d3-af9b-41e3-a55d-12f5d501c35e',
    API_BASE_URL: 'https://digitizing-sso-api.dev.altasoftware.vn/api',
    APP_NAME: 'MOBILE',
    fvers: '0.0.1',
    codePush: Platform.select({
      ios: {
        production: 'Niq-KUNKgapnzYLsH_uFqaJK0ROwDijayB9yZ',
      },
      android: {
        production: 'HGlo3ryjhYdNu3EyBSRQKKwkqOIwyKvRSKKeT',
      },
    }),
  },
  firebase: {
    apiKey: 'AIzaSyDn76z8cT_80SuaafCsRCPuQXObB1JATB4',
    authDomain: 'managementplastic-ba314.firebaseapp.com',
    databaseURL: 'https://managementplastic-ba314-default-rtdb.firebaseio.com',
    projectId: 'managementplastic-ba314',
    storageBucket: 'managementplastic-ba314.appspot.com',
    messagingSenderId: '766044046513',
    appId: '1:766044046513:web:6b031e645d8cc22c74ce90',
    measurementId: 'G-WW6CS6NC6C'
  }
};

export const MIRA_CODE = {
  OPH_ACTIVATE: 1,
  OPH_GROUP_UPDATE: 3,
  OPH_MEDIA_HTTP: 67,
};
