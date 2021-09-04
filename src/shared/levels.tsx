import { Level } from "./constants";

export const levelsMap: Level[] = [
  { // LEVEL 1
    start: {
      row: 3,
      col: 0
    },
    end: {
      row: 3,
      col: 4
    },
  },
  { // LEVEL 2
    start: {
      row: 2,
      col: 3
    },
    end: {
      row: 2,
      col: 0
    },
  },
  { // LEVEL 3
    start: {
      row: 4,
      col: 0
    },
    end: {
      row: 0,
      col: 0
    },
  },
  { // LEVEL 4
    start: {
      row: 2,
      col: 3
    },
    end: {
      row: 2,
      col: 2
    },
  },
  { // LEVEL 5
    start: {
      row: 0,
      col: 3
    },
    end: {
      row: 3,
      col: 2
    },
  },
  { // LEVEL 6
    start: {
      row: 3,
      col: 4
    },
    end: {
      row: 3,
      col: 0
    },
  },
  { // LEVEL 7
    start: {
      row: 4,
      col: 4
    },
    end: {
      row: 2,
      col: 0
    },
  },
  { // LEVEL 8
    start: {
      row: 0,
      col: 1
    },
    end: {
      row: 3,
      col: 3
    },
  },
  { // LEVEL 9
    start: {
      row: 0,
      col: 4
    },
    end: {
      row: 3,
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
  },
  { // LEVEL 11
    start: {
      row: 1,
      col: 2
    },
    end: {
      row: 1,
      col: 3
    },
    mines: [
      {
        row: 2,
        col: 2
      }
    ]
  },
  { // LEVEL 12
    start: {
      row: 4,
      col: 3
    },
    end: {
      row: 2,
      col: 3
    },
    mines: [
      {
        row: 3,
        col: 3
      }
    ]
  },
  { // LEVEL 13
    start: {
      row: 1,
      col: 1
    },
    end: {
      row: 1,
      col: 3
    },
    mines: [
      {
        row: 1,
        col: 2
      }
    ]
  },
  { // LEVEL 14
    start: {
      row: 2,
      col: 0
    },
    end: {
      row: 0,
      col: 2
    },
    mines: [
      {
        row: 2,
        col: 1
      },
      {
        row: 0,
        col: 1
      }
    ]
  },
  { // LEVEL 15
    start: {
      row: 3,
      col: 0
    },
    end: {
      row: 0,
      col: 3
    },
    mines: [
      {
        row: 2,
        col: 0
      },
      {
        row: 1,
        col: 2
      },
    ]
  },
  { // LEVEL 16
    start: {
      row: 1,
      col: 0
    },
    end: {
      row: 0,
      col: 4
    },
    mines: [
      {
        row: 0,
        col: 1
      },
      {
        row: 1,
        col: 1
      },
    ]
  },
  { // LEVEL 17
    start: {
      row: 4,
      col: 3
    },
    end: {
      row: 0,
      col: 0
    },
    mines: [
      {
        row: 4,
        col: 0
      },
      {
        row: 3,
        col: 3
      },
    ]
  },
  { // LEVEL 18
    start: {
      row: 4,
      col: 2
    },
    end: {
      row: 0,
      col: 1
    },
    mines: [
      {
        row: 3,
        col: 2
      },
      {
        row: 4,
        col: 1
      },
    ]
  },
  { // LEVEL 19
    start: {
      row: 0,
      col: 2
    },
    end: {
      row: 4,
      col: 2
    },
    mines: [
      {
        row: 2,
        col: 2
      },
    ]
  },
  { // LEVEL 20
    start: {
      row: 0,
      col: 3
    },
    end: {
      row: 4,
      col: 1
    },
    mines: [
      {
        row: 1,
        col: 1
      },
      {
        row: 1,
        col: 3
      },
    ]
  },
  { // LEVEL 21
    start: {
      row: 1,
      col: 2
    },
    end: {
      row: 2,
      col: 2
    },
    keys: [
      {
        row: 3,
        col: 1
      },
    ]
  },
  { // LEVEL 22
    start: {
      row: 1,
      col: 1
    },
    end: {
      row: 0,
      col: 3
    },
    keys: [
      {
        row: 0,
        col: 0
      },
    ]
  },
  { // LEVEL 23
    start: {
      row: 3,
      col: 4
    },
    end: {
      row: 1,
      col: 3
    },
    keys: [
      {
        row: 4,
        col: 3
      },
    ]
  },
  { // LEVEL 24
    start: {
      row: 1,
      col: 1
    },
    end: {
      row: 3,
      col: 3
    },
    keys: [
      {
        row: 4,
        col: 2
      },
    ]
  },
  { // LEVEL 25
    start: {
      row: 4,
      col: 1
    },
    end: {
      row: 1,
      col: 1
    },
    keys: [
      {
        row: 3,
        col: 3
      },
    ]
  },
  { // LEVEL 26
    start: {
      row: 1,
      col: 2
    },
    end: {
      row: 4,
      col: 2
    },
    keys: [
      {
        row: 3,
        col: 1
      },
      {
        row: 3,
        col: 3
      },
    ]
  },
  { // LEVEL 27
    start: {
      row: 3,
      col: 4
    },
    end: {
      row: 1,
      col: 3
    },
    keys: [
      {
        row: 0,
        col: 1
      },
      {
        row: 3,
        col: 1
      },
    ]
  },
  { // LEVEL 28
    start: {
      row: 3,
      col: 4
    },
    end: {
      row: 1,
      col: 0
    },
    keys: [
      {
        row: 4,
        col: 3
      },
    ]
  },
  { // LEVEL 29
    start: {
      row: 2,
      col: 1
    },
    end: {
      row: 1,
      col: 2
    },
    keys: [
      {
        row: 3,
        col: 0
      },
      {
        row: 1,
        col: 3
      },
    ]
  },
  { // LEVEL 30
    start: {
      row: 2,
      col: 2
    },
    end: {
      row: 3,
      col: 3
    },
    keys: [
      {
        row: 0,
        col: 0
      },
    ]
  }
]
