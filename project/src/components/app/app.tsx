import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorite from '../favorite/favorite';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';
import { AppRoute } from '../../const';

type AppProps = {
  cardsCount: number;
  offerCount: number;
}

function App({cardsCount, offerCount}: AppProps): JSX.Element {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            cardsCount={cardsCount}
            offerCount={offerCount}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favorite />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Room />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
