import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import membersReducer from './reducers/memberReducer';
import memberCardReducer from './reducers/memberCardReducer';
import eventReducer from './reducers/eventReducer';

const reducer = combineReducers({
  members: membersReducer,
  memberCard: memberCardReducer,
  events: eventReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
