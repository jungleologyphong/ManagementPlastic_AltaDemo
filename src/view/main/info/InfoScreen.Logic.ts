import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import { useEffect, useState } from 'react';

export const InfoScreenLogic = () => {
  const [tempUser, setTempUser] = useState([]);
  let dataUser = {};

  useEffect(() => {
    firebase.app().database('https://managementplastic-ba314-default-rtdb.firebaseio.com').ref('/users');

    database().ref().child('/users/').on('value',(snapshot) =>{
      const items = [];
      snapshot.forEach((child) => {
        const item = {
          key: child.key,
          fullname: child.val().fullname,
        };
        items.push(item);
      })
      setTempUser(items);
    });
    dataUser = Object.assign({}, ...tempUser );
  },[]);

  return {dataUser};
};