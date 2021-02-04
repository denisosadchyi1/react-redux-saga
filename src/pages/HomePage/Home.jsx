import React, {useEffect} from 'react';
import r from './home.module.scss';
import UserList from '../../components/UsersList';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
} from "../../redux/actions/usersActions";

const Home = () => {
  const test = useSelector(state => state.user.loadUsers.users)
  console.log(test)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <UserList />
    </div>
  );
}

export default Home;
