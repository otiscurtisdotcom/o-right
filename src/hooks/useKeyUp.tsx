import { useEffect } from 'react';
import { checkDirection } from '../shared/constants';

const useKeyUp = (action: any) => {
  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      const directionObj = checkDirection(event.key);
      if (directionObj) {
        action(event.key, directionObj.direction);
      }
    }
    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  });
}

export default useKeyUp;