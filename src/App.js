import React, {useEffect} from 'react';
import Header from './components/Header';
import './App.scss';
import UserList from './components/UsersList';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import {
  fetchUsers,
} from "./redux/actions/usersActions";
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import ChoosePage from './pages/ChoosePage/ChoosePage';
import routes from './routes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.CHOOSE_PAGE} component={ChoosePage} />
      </Switch>
    </div>
  );
}

export default App;
