export interface Coords {
  row: number;
  col: number;
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

export const WIDTH = 5;

export const USER_LEVEL = 'userLevel';

export const DEFAULT_GRID: Level = {
  start:{row:0,col:0},
  end: {row:1,col:1}
}
