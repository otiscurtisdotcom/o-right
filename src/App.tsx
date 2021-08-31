import './App.scss';
import Logo from './Logo/Logo';
import Page from './Page/Page';

function App() {
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
