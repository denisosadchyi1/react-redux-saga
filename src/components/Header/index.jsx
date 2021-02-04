import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Time from '../../UI/Time';
import s from './header.module.scss';

const Header = () => {
  const chooseUsers = useSelector(state => state.user.showUsers.chooseUser)
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <NavLink to="/" exact activeClassName={s.active}>Home</NavLink>
        <NavLink to="/choose" exact activeClassName={s.active}>Choosed Users</NavLink>
      </div>
      <div className={s.time}>
        <h4 className={s.title}>{chooseUsers.length ? chooseUsers.length : '0'} отмеченных пользователей</h4>
        <Time />
      </div>
    </div>
  )
}

export default Header;