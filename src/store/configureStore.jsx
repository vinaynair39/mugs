import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filterReducer from '../reducers/filter';
import grievancesReducer from '../reducers/grievances';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filterReducer,
      grievances: grievancesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};