import React from 'react';
import logoPC from '../../assets/logoPC.png';
import logoMob from '../../assets/logoMob.png';

export const HeaderLogo = () => {
  return (
    <>
      {' '}
      <img className="header__logo" src={logoPC} alt="" />
      <img className="header__logo logo-mobile" src={logoMob} alt="" />{' '}
    </>
  );
};
