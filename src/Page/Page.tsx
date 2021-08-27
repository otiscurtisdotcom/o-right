import axios from 'axios';
import { useEffect, useState } from 'react';
import useKeyPress, { Direction } from '../hooks/useKeypress';
import './Page.scss';

function Page() {
  const [lastDirection, setLastDirection] = useState('');
  const [lastKeyPressed, setLastKeyPressed] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [isCurrentWordValid, setIsCurrentWordValid] = useState(false);

  useKeyPress((key: string, direction: Direction)=> {
    setCurrentWord(currentWord + key)
    setLastDirection(`${direction}`);
    setLastKeyPressed(key);
  });

  useEffect(() => {
    const fetchData = async () => {
      if (currentWord.length > 2) {
        const result = await axios(
          `https://api.datamuse.com/words?sp=${currentWord}&md=d&max=1`,
        );
  
        setIsCurrentWordValid(
          result.data[0] && result.data[0]['defs'] &&
          result.data[0]['defs'].length > 0 || false
        );
      } else {
        setIsCurrentWordValid(false);
      }
    };
 
    fetchData();
  }, [currentWord]);

  function restart() {
    setCurrentWord('');
    setLastDirection('');
    setLastKeyPressed('');
  }

  return (
    <section>
      <p>Direction = {lastDirection}</p>
      <p>Last key pressed = {lastKeyPressed}</p>
      <p>Current word = {currentWord}</p>
      <p>Is this a valid word?: {isCurrentWordValid ? 'YES' : 'NO'}</p>
      
      <button onClick={restart}>
        Restart
      </button>
    </section>
  );
}

export default Page;
