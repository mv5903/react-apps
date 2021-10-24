import './App.css';

import { Route, Switch } from 'react-router-dom';

import Search from './components/Search/Search';
import Connect from './components/Connect/Connect';
import View from './components/View/View';
import Manage from './components/Manage/Manage';
import Account from './components/Account/Account';
import Home from './components/Home/Home';
import MainNav from './components/Navbar/MainNav'

function App() {
  return (
    <div className="App">
      <MainNav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/view" exact>
            <View />
          </Route>
          <Route path="/manage" exact>
            <Manage />
          </Route>
          <Route path="/connect" exact>
            <Connect />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/account" exact>
            <Account />
          </Route>
        </Switch>
      </MainNav>
    </div>
  );
}

export default App;
