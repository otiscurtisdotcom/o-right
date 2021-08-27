import { SquareState } from '../Page/Page';
import { WIDTH } from '../shared/constants';
import './Grid.scss';

const Grid = (props: any) => {
  console.log('GRID STATUS: ', props.gridData);
  const gridData: SquareState[][] = props.gridData

  const squares: JSX.Element[] = [];
  for(let row = 0; row < WIDTH; row++) {
    const rowContainer: JSX.Element[] = [];
    for(let column = 0; column < WIDTH; column++) {
      rowContainer.push(
        <span>{renderSquare(row, column)}</span>
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
        (status.currentSquare ? 'current ' : '') +
        (status.goalSquare ? 'goal ' : '') +
        'square'
      }>
        {status.letter}
      </div>
    );
  }

  return (
    <div className="grid">
      {squares}
    </div>
  );
}

export default Grid;
