import { Level, SquareState, WIDTH } from '../shared/constants';
import './Grid.scss';

const Grid = (props: {gridData: SquareState[][], currentLevel?: Level}) => {
  const gridData = props.gridData;
  const squares: JSX.Element[] = [];

  const renderSquare = (row: number, col: number) => {
    const status = gridData[row][col];
    return (
      <div className={
        (status.isCurrentSquare && props.currentLevel ? 'current ' : '') +
        (status.goalSquare && props.currentLevel ? 'goal ' : '') +
        'square'
      }>
        {status.letter.toUpperCase()}
      </div>
    );
  };

  for(let row = 0; row < WIDTH; row++) {
    const rowContainer: JSX.Element[] = [];
    for(let column = 0; column < WIDTH; column++) {
      rowContainer.push(
        <>{renderSquare(row, column)}</>
      );
    }
    squares.push(
      <div className="row">{rowContainer}</div>
    );
  };

  return (
    <div className={(props.currentLevel ? 'shown ' : '') + 'grid'}>
      <div className="wrapper">
        {squares}
      </div>
    </div>
  );
}

export default Grid;
