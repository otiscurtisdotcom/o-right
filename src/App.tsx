import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from 'react-router-dom';
import './App.scss';
import Logo from './Logo/Logo';
import Game from './Game/Game';
import Menu from './Menu/Menu';
import { useEffect, useState } from 'react';
import { USER_LEVEL } from './shared/constants';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const [userLevel, setUserLevel] = useState(1);

  useEffect(() => {
    const levelNumber = localStorage.getItem(USER_LEVEL);
    setUserLevel(Number(levelNumber || 1));
  }, []);

  const nextLevel = () => {
    const newLevel = userLevel + 1;
    setUserLevel(newLevel);
    localStorage.setItem(USER_LEVEL, `${newLevel}`);
  }

  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <HashRouter basename='/'>
          <Switch>
            <PrivateRoute
              path="/level/:id"
              component={Game}
              userLevel={userLevel}
              nextLevel={nextLevel}
            />
            <Route exact path="/">
              <Menu userLevel={userLevel} />
            </Route>
          </Switch>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
