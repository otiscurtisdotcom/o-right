import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '../Grid/Grid';
import Modal from '../Modal/Modal';
import useKeyPress, { Direction } from '../hooks/useKeypress';
import { Coords, DataMuseData, Level, SquareState, WIDTH } from '../shared/constants';
import './Game.scss';
import { levelsMap } from '../shared/levels';

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

const getFrequency = (tags?: string[]): number => {
  if (tags) {
    return Number(tags.find(tag => tag.includes('f:'))
          ?.replace('f:',''));
  } else {
    return 0;
  }
}

const Game = (props: {
  userLevel: number,
  nextLevel: any
}) => {
  const levelPath = useLocation().pathname;
  const iconPath = process.env.PUBLIC_URL + '/svg/icons.svg';

  const [currentLevel, setCurrentLevel] = useState<Level>();
  const [currentLevelNumber, setCurrentLevelNumber] = useState<Number>();
  const [currentWord, setCurrentWord] = useState('');
  const [isCurrentWordValid, setIsCurrentWordValid] = useState(false);
  const [grid, setGrid] = useState<SquareState[][]>(blankGrid({row:0,col:0},{row:1,col:1}));
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [isPlayingStatus, setIsPlayingStatus] = useState(true);
  const [winStatus, setWinStatus] = useState(false);

  useKeyPress((key: string, direction: Direction)=> {
    makeMove(key, direction);
  });

  useEffect(() => {
    const levelNum = Number(levelPath.split('/')[2]);
    setCurrentLevel(levelsMap[levelNum - 1]);
    setCurrentLevelNumber(levelNum);
  }, []);

  useEffect(() => {
    if (currentLevel) {
      setGrid(blankGrid(currentLevel.start, currentLevel.end));
    }
  }, [currentLevel]);

  useEffect(() => {
    setIsCheckingStatus(true);
    const fetchData = async () => {
      const currentSquare = getCurrentSquare();
      if (currentWord.length > 2 && currentSquare && currentSquare.goalSquare) {
        const result = await axios(
          `https://api.datamuse.com/words?sp=${currentWord}&md=fr,d,p&max=1`,
        );

        const word: DataMuseData = result.data[0];

        if (!word || !word.tags) {
          setIsCurrentWordValid(false);
          return;
        }

        const frequency = getFrequency(word.tags);
        
        setIsCurrentWordValid(
          word.defs && word.defs.length > 0
          && word.word === currentWord
          && word.tags && !word.tags.includes("prop")
          && frequency > 0.15
          || false
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
    const currentSquare = getCurrentSquare();
    if (isCheckingStatus === false && currentSquare && currentSquare.goalSquare) {
      setWinStatus(isCurrentWordValid);
      setIsPlayingStatus(false);
    }
  }, [isCheckingStatus]);

  useEffect(() => {
    // Unlock next level if userLevel is completed
    if (winStatus && props.userLevel === currentLevelNumber) {
      props.nextLevel();
    }
  }, [winStatus])

  const makeMove = (key: string, direction: Direction) => {
    if (!grid) return;
    
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
    setGrid(newGrid);
  }

  const restart = () => {
    setCurrentWord('');
    setGrid(blankGrid(currentLevel!.start, currentLevel!.end));
    setIsPlayingStatus(true);
    setWinStatus(false);
  }

  const getCurrentSquare = (): SquareState | null => {
    if (grid) {
      const currentRow = grid.find(row => row.some(square => square.isCurrentSquare === true))!;
      return currentRow.find(square => square.isCurrentSquare)!;
    } else return null;
  };

  return (
    <>
      <section>
        <Grid gridData={grid} currentLevel={currentLevel} />
        <div className="text-box">
          <h3>{currentWord.toUpperCase()}</h3>
        </div>
      </section>

      <Modal 
        isPlayingStatus={isPlayingStatus}
        winStatus={winStatus}
        currentWord={currentWord}
        restart={restart}
      />

      <div className="side-bar">
        <button className="square-btn" onClick={restart}>
          <svg>
            <use href={`${iconPath}#reset`} />
          </svg>
        </button>
        <Link className="button square-btn" to="/">
          <svg>
            <use href={`${iconPath}#map`} />
          </svg>
        </Link>
      </div>
    </>
  );
}

export default Game;
