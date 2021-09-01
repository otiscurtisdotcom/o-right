import './App.scss';
import Logo from './Logo/Logo';
import Game from './Game/Game';
import Menu from './Menu/Menu';
import { useState } from 'react';

const App = () => {
  const [levelNumber, setLevelNumber] = useState<number|null>(null);

  const goToLevel = (level: number) => {
    console.log(`Here`, level);
    setLevelNumber(level);
  }

  const goToMenu = () => {
    setLevelNumber(null);
  }

  const Page = () => {
    if (levelNumber) {
      return (<Game goToMenu={goToMenu} />)
    } else {
      return (<Menu goToLevel={goToLevel} />)
    }
  }

  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <Page />
      </main>
    </div>
  );
}

export default App;
