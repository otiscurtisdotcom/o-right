import { Route, Redirect } from 'react-router-dom';
import Game from '../Game/Game';

const PrivateRoute = (props: 
  // any

  {
  component: any,
  userLevel: number,
  nextLevel: any,
  path: string,
  location?: {
    pathname: string
  }
  }
) => {
  const urlLevelNumber = Number(props.location && props.location.pathname.split('/')[2]);
  return urlLevelNumber <= props.userLevel ?
    (
      <Route path={props.path}>
        <Game userLevel={props.userLevel} nextLevel={props.nextLevel} />
      </Route>
    )
    : (<Redirect to="/" />);
};

export default PrivateRoute;