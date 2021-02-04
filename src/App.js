import React, {useEffect} from 'react';
import Header from './components/Header';
import './App.scss';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import ChoosePage from './pages/ChoosePage/ChoosePage';
import routes from './routes';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.CHOOSE_PAGE} component={ChoosePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
