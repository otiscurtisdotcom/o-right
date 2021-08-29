import './Modal.scss';

const Modal = (props: {
  isPlayingStatus: boolean,
  winStatus: boolean,
  currentWord: string,
  restart: any
}) => {
  return (
    <div className={(props.isPlayingStatus ? 'hidden ' : '') + 'modal'}>
      <div className="box">
        <h1>{props.winStatus ? 'Well done' : 'Unlucky'}</h1>
        <p>{props.currentWord.toUpperCase()}{props.winStatus ? ' is a valid word' : ' is not a valid word'}</p>
        <button onClick={props.restart}>RESTART</button>
      </div>
    </div>
  )
}

export default Modal;
