import { useState } from 'react';
import useKeyPress, { Direction } from '../hooks/useKeypress';
import './Page.scss';

function Page() {
  const [lastDirection, setLastDirection] = useState('');
  const [lastKeyPressed, setLastKeyPressed] = useState('');
  let [currentWord, setCurrentWord] = useState('');

  useKeyPress((key: string, direction: Direction)=> {
    setCurrentWord(currentWord + key)
    setLastDirection(`${direction}`);
    setLastKeyPressed(key);
  });

  return (
    <div>
      <p>Direction = {lastDirection}</p>
      <p>Last key pressed = {lastKeyPressed}</p>
      <p>Current word = {currentWord}</p>
    </div>
  );
}

export default Page;
