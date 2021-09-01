import { SquareState, WIDTH } from '../shared/constants';
import './Grid.scss';

const Grid = (props: any) => {
  const gridData: SquareState[][] = props.gridData

  const squares: JSX.Element[] = [];
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

  function renderSquare(row: number, col: number) {
    const status = gridData[row][col];
    return (
      <div className={
        (status.isCurrentSquare ? 'current ' : '') +
        (status.goalSquare ? 'goal ' : '') +
        'square'
      }>
        {status.letter.toUpperCase()}
      </div>
    );
  }

  return (
    <div className="grid">
      <div className="wrapper">
        {squares}
      </div>
    </div>
  );
}

export default Grid;
