import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
import './App.scss';
import Logo from './Logo/Logo';
import Game from './Game/Game';
import Menu from './Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <HashRouter basename='/'>
          <Switch>
            <Route path="/level/:id" component={Game} />
            <Route exact path="/" component={Menu} />
          </Switch>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
