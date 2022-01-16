import MainScreen from '../main/main';

type AppProps = {
  cardsCount: number;
  offerCount: number;
}

function App({cardsCount, offerCount}: AppProps): JSX.Element {
  return (
    <MainScreen
      cardsCount = {cardsCount}
      offerCount = {offerCount}
    />
  );
}

export default App;
