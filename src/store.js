import {createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import membersReducer from './reducers/memberReducer'

const reducer = combineReducers({
    members:membersReducer,

  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store