import { Link } from 'react-router-dom';
import { levelsMap } from '../shared/levels';
import './Menu.scss';

const Menu = (props: {userLevel: number}) => {
  const levelsElements: JSX.Element[] = [];
  for (let i = 1; i < levelsMap.length + 1; i++) {
    const disabled = i > props.userLevel;
    const buttonContent = disabled ? '' : `${i}`;

    levelsElements.push(
      <Link key={`menu-${i}`} className={(disabled ? 'disabled ' : '') + 'square button'} to={`level/${i}`}>
        {buttonContent}
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