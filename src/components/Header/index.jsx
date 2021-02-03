import React from 'react';
import Time from '../../UI/Time';
import s from './header.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <Time />
      <h3 className={s.title}>23 пользователя</h3>
    </div>
  )
}

export default Header;