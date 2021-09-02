import { useEffect } from 'react';

export enum Direction {
  'DOWN',
  'UP',
  'LEFT',
  'RIGHT'
}

export interface keySet {
  direction: Direction,
  keys: string[]
}

const directions: keySet[] = [
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

const useKeyPress = (action: any) => {
  useEffect(() => {
    const onKeyup = (event: KeyboardEvent) => {
      const directionObj = checkDirection(event.key);
      if (directionObj) {
        action(event.key, directionObj.direction);
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  });
}

const checkDirection = (key:string): keySet | undefined => {
  return directions.find((group) => {
    const containsKey = group.keys.some((letter) => letter === key);
    return containsKey ? group : null;
  });
}

export default useKeyPress;