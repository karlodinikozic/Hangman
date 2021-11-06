import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user'
import gameInfoReducer from './features/gameInfo';
import gameReducer from './features/game';


const store = configureStore({
  reducer: {
    user:userReducer,
    gameInfo:gameInfoReducer,
    game:gameReducer
  },
});



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


