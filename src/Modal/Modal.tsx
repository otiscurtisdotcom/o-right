import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = (props: {
  isPlayingStatus: boolean,
  winStatus: boolean,
  currentWord: string,
  restart: any,
  showMap: boolean,
  hideMap: any
}) => {
  const iconPath = process.env.PUBLIC_URL + '/svg/keyboard.svg';

  const modalContent = () => {
    if (!props.isPlayingStatus) {
      return (
        <div className="box">
          <div className="text">
            <h2>{props.winStatus ? 'Well done' : 'Unlucky'}</h2>
            <p>
              {props.currentWord.toUpperCase()}
              {props.winStatus ? ' is a valid word' : ' is not a valid word'}
            </p>
          </div>
          <div className="buttons">
            <button onClick={props.restart}>
              RESTART
            </button>
            <Link className="button" to="/">
              MAP
            </Link>
          </div>
        </div>
      )
    } else if (props.showMap) {
      return (
        <div className="box">
          <div className="text">
            <h2>MAP</h2>
            <img src={`${iconPath}`} />
          </div>
          <div className="buttons">
            <button onClick={props.hideMap}>
              OKAY
            </button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={(props.isPlayingStatus && !props.showMap ? 'hidden ' : '') + 'modal'}>
      {modalContent()}
    </div>
  );
}

export default Modal;
