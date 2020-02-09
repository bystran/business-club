import {createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import membersReducer from './reducers/memberReducer'
import memberCardReducer from './reducers/memberCardReducer'
import recruitFormReducer from './reducers/recruitFormReducer'

const reducer = combineReducers({
    members:membersReducer,
    memberCard:memberCardReducer,
    recruitForm:recruitFormReducer

  })

const store = createStore(reducer, applyMiddleware(thunk))

export default store