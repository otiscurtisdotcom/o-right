import { Level } from "./constants";

export const levelsMap: Level[] = [
  { // LEVEL 1
    start: {
      row: 2,
      col: 3
    },
    end: {
      row: 2,
      col: 1
    },
  },
  { // LEVEL 2
    start: {
      row: 0,
      col: 1
    },
    end: {
      row: 2,
      col: 3
    },
  },
  { // LEVEL 3
    start: {
      row: 2,
      col: 1
    },
    end: {
      row: 0,
      col: 0
    },
  },
  { // LEVEL 4
    start: {
      row: 2,
      col: 2
    },
    end: {
      row: 3,
      col: 0
    },
  },
  { // LEVEL 5
    start: {
      row: 2,
      col: 2
    },
    end: {
      row: 4,
      col: 4
    },
  },
  { // LEVEL 6
    start: {
      row: 4,
      col: 4
    },
    end: {
      row: 4,
      col: 0
    },
  },
  { // LEVEL 7
    start: {
      row: 1,
      col: 1
    },
    end: {
      row: 3,
      col: 0
    },
  },
  { // LEVEL 8
    start: {
      row: 0,
      col: 2
    },
    end: {
      row: 3,
      col: 4
    },
  },
  { // LEVEL 9
    start: {
      row: 0,
      col: 4
    },
    end: {
      row: 4,
      col: 0
    },
  },
  { // LEVEL 10
    start: {
      row: 4,
      col: 4
    },
    end: {
      row: 0,
      col: 0
    },
  }
]
