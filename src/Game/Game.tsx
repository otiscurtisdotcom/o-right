import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '../Grid/Grid';
import Modal from '../Modal/Modal';
import useKeyUp from '../hooks/useKeyUp';
import { DataMuseData, Direction, DEFAULT_GRID, Level, SquareState, WIDTH, directions, ICON_PATH } from '../shared/constants';
import './Game.scss';
import { levelsMap } from '../shared/levels';
import useKeyDown from '../hooks/useKeyDown';

const blankGrid = (level: Level): SquareState[][] => {
  const grid: SquareState[][] = [];
  for (let row = 0; row < WIDTH; row++) {
    const rowArray: SquareState[] = [];
    for (let col = 0; col < WIDTH; col++) {
      const square: SquareState = {
        isCurrentSquare: (level.start.row === row && level.start.col === col),
        isGoalSquare: (level.end.row === row && level.end.col === col),
        isMineSquare: (
          level.mines?.some(mine => mine.row === row && mine.col === col) 
          || false
        ),
        isKeySquare: (
          level.keys?.some(key => key.row === row && key.col === col) 
          || false
        ),
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

  const [currentLevel, setCurrentLevel] = useState<Level>();
  const [currentLevelNumber, setCurrentLevelNumber] = useState<Number>();
  const [currentWord, setCurrentWord] = useState('');
  const [isCurrentWordValid, setIsCurrentWordValid] = useState(false);
  const [grid, setGrid] = useState<SquareState[][]>(blankGrid(DEFAULT_GRID));
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [isPlayingStatus, setIsPlayingStatus] = useState(true);
  const [winStatus, setWinStatus] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [keyDown, setKeyDown] = useState<Direction | null>(null);

  useKeyDown((direction: Direction) => {
    setKeyDown(direction);
  });

  useKeyUp((key: string, direction: Direction) => {
    setKeyDown(null);
    makeMove(key, direction);
  });

  useEffect(() => {
    const levelNum = Number(levelPath.split('/')[2]);
    setCurrentLevel(levelsMap[levelNum - 1]);
    setCurrentLevelNumber(levelNum);
  }, []);

  useEffect(() => {
    if (currentLevel) {
      setGrid(blankGrid(currentLevel));
    }
  }, [currentLevel]);

  useEffect(() => {
    setIsCheckingStatus(true);
    const fetchData = async () => {
      const currentSquare = getCurrentSquare();
      if (currentWord.length > 2 && currentSquare && currentSquare.isGoalSquare) {
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
          // word.defs && word.defs.length > 0
          word.word === currentWord
          && word.tags && !word.tags.includes("prop")
          && frequency > 0.01
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
    if (isCheckingStatus === false && currentSquare && currentSquare.isGoalSquare) {
      setWinStatus(isCurrentWordValid && checkKeys());
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
        if (currentSquare?.coords.row === 0) {
          shake();
          return;
        }
        newSquare = grid[currentSquare!.coords.row - 1][currentSquare!.coords.col];
        break;
      case Direction.DOWN:
        if (currentSquare?.coords.row === WIDTH - 1) {
          shake();
          return;
        }
        newSquare = grid[currentSquare!.coords.row + 1][currentSquare!.coords.col];
        break;
      case Direction.LEFT:
        if (currentSquare?.coords.col === 0) {
          shake();
          return;
        }
        newSquare = grid[currentSquare!.coords.row][currentSquare!.coords.col - 1];
        break;
      case Direction.RIGHT:
        if (currentSquare?.coords.col === WIDTH - 1) {
          shake();
          return;
        }
        newSquare = grid[currentSquare!.coords.row][currentSquare!.coords.col + 1];
        break;
    }

    if (newSquare.letter || newSquare.isMineSquare) {
      shake();
      return;
    }

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
    setGrid(blankGrid(currentLevel!));
    setIsPlayingStatus(true);
    setWinStatus(false);
  }

  const getCurrentSquare = (): SquareState => {
    return grid && grid.flat().find(square => square.isCurrentSquare)!;
  };

  const checkKeys = (): boolean => {
    const keys = grid.flat().filter(square => square.isKeySquare);
    return keys ? !keys.some(key=> key.letter === '') : true;
  };

  const shake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 600);
  }

  return (
    <>
      <section>
        <Grid
          gridData={grid}
          currentLevel={currentLevel}
          isShaking={isShaking}
          keyDown={keyDown}
        />
        <div className="text-box">
          <h3>{currentWord.toUpperCase()}</h3>
        </div>
      </section>

      <Modal 
        isPlayingStatus={isPlayingStatus}
        winStatus={winStatus}
        currentWord={currentWord}
        restart={restart}
        showMap={showMap}
        hideMap={() => setShowMap(false)}
      />

      <div className="side-bar">
        <button className="square-btn" onClick={restart}>
          <svg>
            <use href={`${ICON_PATH}#reset`} />
          </svg>
        </button>
        <Link className="button square-btn" to="/">
          <svg className="arrow-left">
            <use href={`${ICON_PATH}#arrow`} />
          </svg>
        </Link>
        <button className="square-btn" onClick={() => setShowMap(true)}>
          <svg>
            <use href={`${ICON_PATH}#map`} />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Game;
