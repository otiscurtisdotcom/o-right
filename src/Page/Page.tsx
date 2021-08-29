import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '../Grid/Grid';
import useKeyPress, { Direction } from '../hooks/useKeypress';
import Modal from '../Modal/Modal';
import { WIDTH } from '../shared/constants';
import './Page.scss';

export interface Coords {
  row: number;
  col: number;
}

export interface SquareState {
  isCurrentSquare: boolean;
  goalSquare: boolean;
  letter: string;
  coords: Coords;
}

const blankGrid = (start: Coords, goal: Coords): SquareState[][] => {
  const grid: SquareState[][] = [];
  for (let row = 0; row < WIDTH; row++) {
    const rowArray: SquareState[] = [];
    for (let col = 0; col < WIDTH; col++) {
      const square: SquareState = {
        isCurrentSquare: (start.row === row && start.col === col),
        goalSquare: (goal.row === row && goal.col === col),
        letter: '',
        coords: {row, col}
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
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [isPlayingStatus, setIsPlayingStatus] = useState(true);
  const [winStatus, setWinStatus] = useState(false);

  useKeyPress((key: string, direction: Direction)=> {
    makeMove(key, direction);
  });

  useEffect(() => {
    setIsCheckingStatus(true);
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
    fetchData().then(() => {
      setIsCheckingStatus(false);
    });
  }, [currentWord]);

  useEffect(() => {
    if (isCheckingStatus === false && getCurrentSquare().goalSquare) {
      console.log(`Goal reached. WIN?`, isCurrentWordValid);
      setWinStatus(isCurrentWordValid);
      setIsPlayingStatus(false);
    }
  }, [isCheckingStatus]);

  const makeMove = (key: string, direction: Direction) => {
    const newGrid = grid;
    const currentSquare = getCurrentSquare();
    
    let newSquare: SquareState; 
    switch (direction) {
      case Direction.UP:
        if (currentSquare?.coords.row === 0) return;
        newSquare = grid[currentSquare!.coords.row - 1][currentSquare!.coords.col];
        break;
      case Direction.DOWN:
        if (currentSquare?.coords.row === WIDTH - 1) return;
        newSquare = grid[currentSquare!.coords.row + 1][currentSquare!.coords.col];
        break;
      case Direction.LEFT:
        if (currentSquare?.coords.col === 0) return;
        newSquare = grid[currentSquare!.coords.row][currentSquare!.coords.col - 1];
        break;
      case Direction.RIGHT:
        if (currentSquare?.coords.col === WIDTH - 1) return;
        newSquare = grid[currentSquare!.coords.row][currentSquare!.coords.col + 1];
        break;
    }

    if (newSquare.letter) return;

    // Set newSquare in newGrid & wipe old one
    newSquare.isCurrentSquare = true;
    newGrid[newSquare.coords.row][newSquare.coords.col] = newSquare;

    const previousSquare = newGrid[currentSquare!.coords.row][currentSquare!.coords.col];
    previousSquare.isCurrentSquare = false;
    previousSquare.letter = key;

    setCurrentWord(currentWord + key)
    setLastKeyPressed(key);
    setLastDirection(`${direction}`);
    setGrid(newGrid);
  }

  const restart = () => {
    setCurrentWord('');
    setLastDirection('');
    setLastKeyPressed('');
    setGrid(blankGrid({row:3, col:0}, {row:1, col:4}));
    setIsPlayingStatus(true);
    setWinStatus(false);
  }

  const getCurrentSquare = (): SquareState => {
    const currentRow = grid.find(row => row.some(square => square.isCurrentSquare === true))!;
    return currentRow.find(square => square.isCurrentSquare)!;
  };

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
      <Modal isPlayingStatus={isPlayingStatus} winStatus={winStatus} currentWord={currentWord} restart={restart} />
    </section>
  );
}

export default Page;
