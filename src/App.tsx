import {
  BrowserRouter as Router,
  Switch,
  Route
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
        <Router>
          <Switch>
            <Route path="/level/:id" component={Game} />
            <Route path="/" exact component={Menu} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
