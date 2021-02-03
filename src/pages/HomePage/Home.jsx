import React, {useEffect} from 'react';
import r from './home.module.scss';
import UserList from '../../components/UsersList';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import {
  fetchUsers,
} from "../../redux/actions/usersActions";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <UserList />
      <Footer />
    </div>
  );
}

export default Home;
