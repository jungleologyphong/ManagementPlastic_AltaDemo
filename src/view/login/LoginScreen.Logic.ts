import {useEffect, useState} from 'react';
import {useSingleAsync} from '~core';
import authPresenter from '~modules/authentication/presenter';

export const LoginScreenLogic = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [checkDarkMode, setDarkMode] = useState(false);

  const [payload, setPayload] = useState({
    username: '',
    password: '',
  });

  const {login} = authPresenter;

  const signInBySingleAsync = useSingleAsync(login);
  
  const toggleDarkMode = () => {
    setDarkMode(!checkDarkMode);
  };
  const handleLogin = () => {

    signInBySingleAsync
      ?.execute({
        username: payload.username,
        password: payload.password,
        redirectUrl: 'http://localhost:4553',
        clientId: '7a2a18d3-af9b-41e3-a55d-12f5d501c35e',
        state: 'login',
      })
      ?.then((res: any) => {
        console.log(res)
      })
      .catch((err: any) => console.log('err', err));
  };

  return {isShowModal, setIsShowModal, isChecked, setChecked, checkDarkMode, setDarkMode, payload, setPayload, toggleDarkMode, handleLogin};
};

