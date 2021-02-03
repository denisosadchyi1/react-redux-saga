import React, {useEffect} from 'react';
import Header from './components/Header';
import './App.scss';
import UserList from './components/UsersList';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import {
  fetchUsers,
} from "./redux/actions/usersActions";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
