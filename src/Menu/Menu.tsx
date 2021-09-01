import { levelsMap } from '../shared/levels';
import './Menu.scss';

const Menu = (props: {
  goToLevel(level: number): any
}) => {
  const levelsElements: JSX.Element[] = [];
  for (let i = 1; i < levelsMap.length + 1; i++) {
    levelsElements.push(
      <button className="square" onClick={() => {props.goToLevel(i); }}>
        {i}
      </button>
    )
  };

  return (
    <div className="menu-grid">
      {levelsElements}
    </div>
  );
}

export default Menu;