import { Level, SquareState, WIDTH } from '../shared/constants';
import './Grid.scss';

const Grid = (props: {
  gridData: SquareState[][],
  currentLevel?: Level,
  isShaking: boolean,
}) => {
  const gridData = props.gridData;
  const squares: JSX.Element[] = [];

  const renderSquare = (row: number, col: number) => {
    const status = gridData[row][col];
    const classes = () => {
      if (props.currentLevel) {
       return (status.isCurrentSquare ? 'current ' : '') +
              (status.isGoalSquare ? 'goal ' : '') +
              (status.isMineSquare ? 'mine ' : '') +
              (status.isKeySquare ? 'key ' : '')
      }
    }
    return (
      <div key={`square-${row}-${col}`} className={`${classes()}square`}>
        {status.letter.toUpperCase()}
      </div>
    );
  };

  for(let row = 0; row < WIDTH; row++) {
    const rowContainer: JSX.Element[] = [];
    for(let column = 0; column < WIDTH; column++) {
      rowContainer.push(
        <span key={`wrapper-${row}-${column}`}>
          {renderSquare(row, column)}
        </span>
      );
    };
    squares.push(
      <div key={`row-${row}`} className="row">{rowContainer}</div>
    );
  };

  const classes = () => {
    return `${props.currentLevel ? 'shown ' : ''}
            ${props.isShaking ? 'shaking ' : ''}`;
  }

  return (
    <div className={`${classes()} grid`}>
      <div className="wrapper">
        {squares}
      </div>
    </div>
  );
}

export default Grid;
