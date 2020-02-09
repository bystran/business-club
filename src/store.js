import {createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import membersReducer from './reducers/memberReducer'
import memberCardReducer from './reducers/memberCardReducer'

const reducer = combineReducers({
    members:membersReducer,
    memberCard:memberCardReducer

  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store