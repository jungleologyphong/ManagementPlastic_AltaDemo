import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';

export const ModalComfirmLogic = (props : {IDStaff: string}) => {
  const {IDStaff} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalRefuse, setModalRefuse] = useState(false);

  useEffect(() => {
    axios.get(`https://6440dec2fadc69b8e0746e32.mockapi.io/api/data/employee/CN01`)
      .then(function (response) {
        console.warn(response.data);
      })
      .catch(function (error) {
        ToastAndroid.show('Toast axios data: ', error);
      });
  });

  return {isShowModal, setIsShowModal, isShowModalRefuse, setModalRefuse,}
};