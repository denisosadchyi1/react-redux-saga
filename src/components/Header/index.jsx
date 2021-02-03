import React from 'react';
import { useSelector } from 'react-redux';
import Time from '../../UI/Time';
import s from './header.module.scss';

const Header = () => {
  const chooseUsers = useSelector(state => state.user.showUsers.chooseUser)
  return (
    <div className={s.header}>
      <Time />
      <h3 className={s.title}>{chooseUsers.length ? chooseUsers.length : '0'} пользователя</h3>
    </div>
  )
}

export default Header;