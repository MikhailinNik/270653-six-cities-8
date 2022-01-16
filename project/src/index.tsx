import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  CARDS_COUNT: 5,
  OFFERS_COUNT: 50,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsCount={Settings.CARDS_COUNT}
      offerCount={Settings.OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
