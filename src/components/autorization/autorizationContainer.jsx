import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Autorization from './autorization';
import { setIsAuth } from '../../store/slices/authSlice';
const AutorizationContainer = () => {
  //имитация авторизации
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isRealLogin, setIsRealLogin] = useState(true);
  const [isRealPas, setIsRealPas] = useState(true);
  const needLogin = 'Username';
  const needPas = 'qwerty';
  const navigate = useNavigate();

  const onSubmit = () => {
    if (login === needLogin && password === needPas) {
      navigate('/cards');
      dispatch(setIsAuth());
    } else if (password !== needPas) {
      setPassword('');
      setIsRealPas(false);
    }
    if (login !== needLogin) {
      setLogin('');
      setIsRealLogin(false);
    }
  };

  return (
    <Autorization
      onSubmit={onSubmit}
      password={password}
      setPassword={setPassword}
      login={login}
      setLogin={setLogin}
      isRealLogin={isRealLogin}
      isRealPas={isRealPas}
    />
  );
};
export default AutorizationContainer;
