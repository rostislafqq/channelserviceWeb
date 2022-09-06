import { useDispatch, useSelector } from 'react-redux';
import { HeaderLogo } from './headerLogo';
import { HeaderExit } from './headerExit';
import { removeUserAuth } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
const HeaderConteiner = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigation = useNavigate();
  const onExit = () => {
    dispatch(removeUserAuth());
    navigation('/');
  };
  return isAuth ? (
    <header>
      <HeaderLogo />
      <HeaderExit onExit={onExit} />
    </header>
  ) : (
    <header className="border">
      <HeaderLogo />
    </header>
  );
};
export default HeaderConteiner;
