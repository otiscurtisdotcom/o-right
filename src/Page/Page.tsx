import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '../Grid/Grid';
import useKeyPress, { Direction } from '../hooks/useKeypress';
import { WIDTH } from '../shared/constants';
import './Page.scss';

export interface Coords {
  row: number;
  col: number;
}

export interface SquareState {
  currentSquare: boolean;
  goalSquare: boolean;
  letter: string;
}

const blankGrid = (start: Coords, goal: Coords): SquareState[][] => {
  const grid: SquareState[][] = [];
  for (let row = 0; row < WIDTH; row++) {
    const rowArray: SquareState[] = [];
    for (let col = 0; col < WIDTH; col++) {
      const square: SquareState = {
        currentSquare: (start.row === row && start.col === col),
        goalSquare: (goal.row === row && goal.col === col),
        letter: ''
      };
      rowArray.push(square);
    }
    grid.push(rowArray);
  }
  return grid;
}

const Page = () => {
  const [lastDirection, setLastDirection] = useState('');
  const [lastKeyPressed, setLastKeyPressed] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [isCurrentWordValid, setIsCurrentWordValid] = useState(false);
  const [grid, setGrid] = useState(blankGrid({row:3, col:0}, {row:1, col:4}));

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
    setGrid(blankGrid({row:3, col:0}, {row:1, col:4}));
  }

  return (
    <section>
      <div className="info">
        <p>Direction = {lastDirection}</p>
        <p>Last key pressed = {lastKeyPressed}</p>
        <p>Current word = {currentWord}</p>
        <p>Is this a valid word?: {isCurrentWordValid ? 'YES' : 'NO'}</p>
        
        <button onClick={restart}>
          Restart
        </button>
      </div>
      <Grid gridData={grid} />
    </section>
  );
}

export default Page;
