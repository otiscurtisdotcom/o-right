import { Link } from 'react-router-dom';
import { levelsMap } from '../shared/levels';
import './Menu.scss';

const Menu = () => {
  const levelsElements: JSX.Element[] = [];
  for (let i = 1; i < levelsMap.length + 1; i++) {
    levelsElements.push(
      <Link className="square button" to={`level/${i}`}>
        {i}
      </Link>
    )
  };

  return (
    <div className="menu-grid">
      {levelsElements}
    </div>
  );
}

export default Menu;