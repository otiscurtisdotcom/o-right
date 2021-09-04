import { useEffect } from 'react';
import { checkDirection } from '../shared/constants';

const useKeyDown = (action: any) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const directionObj = checkDirection(event.key);
      if (directionObj) {
        console.log('HERe');
        action(directionObj.direction);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });
}

export default useKeyDown;