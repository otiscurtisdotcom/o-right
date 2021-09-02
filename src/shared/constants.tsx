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

export interface Level {
  start: Coords;
  end: Coords;
}

export interface DataMuseData {
  word: string;
  tags: string[];
  defs?: string[];
}

export const WIDTH = 5;

export const USER_LEVEL = 'userLevel';
