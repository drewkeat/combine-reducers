import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import authorsReducer from './reducers/authorsReducer'
import booksReducer from './reducers/booksReducer'
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
