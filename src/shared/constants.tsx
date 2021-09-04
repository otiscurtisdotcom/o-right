export interface Coords {
  row: number;
  col: number;
}

export enum Direction {
  'DOWN' ='down',
  'UP' = 'up',
  'LEFT' = 'left',
  'RIGHT' = 'right'
}

export interface SquareState {
  isCurrentSquare: boolean;
  isGoalSquare: boolean;
  isMineSquare: boolean;
  isKeySquare: boolean;
  letter: string;
  coords: Coords;
}

export interface Level {
  start: Coords;
  end: Coords;
  mines?: Coords[];
  keys?: Coords[];
}

export interface DataMuseData {
  word: string;
  tags: string[];
  defs?: string[];
}

export interface keySet {
  direction: Direction,
  keys: string[]
}

export const directions: keySet[] = [
  {
    direction: Direction.DOWN,
    keys: ['c','v','b','n','j','h','g']
  },
  {
    direction: Direction.UP,
    keys: ['e','r','t','y','u','d','f']
  },
  {
    direction: Direction.LEFT,
    keys: ['q','w','a','s','z','x']
  },
  {
    direction: Direction.RIGHT,
    keys: ['i','o','p','k','l','m']
  }
];

export const checkDirection = (key: string): keySet | undefined => {
  return directions.find((group) => {
    const containsKey = group.keys.some((letter) => letter === key);
    return containsKey ? group : null;
  });
};

export const WIDTH = 5;

export const USER_LEVEL = 'userLevel';

export const DEFAULT_GRID: Level = {
  start:{row:0,col:0},
  end: {row:1,col:1}
}

export const ICON_PATH = process.env.PUBLIC_URL + '/svg/icons.svg';
