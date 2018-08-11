import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import  reducers   from '../reducers';


const initialState = {
  city: 'San Salvador, sv',
};

const DebuugingConnect =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState,
  DebuugingConnect(applyMiddleware(thunk)));