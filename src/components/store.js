import React from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const baseUrlLogin = 'https://homepoint-server-staging.herokuapp.com'

// https://homepoint-server-staging.herokuapp.com/api/v1/users/login

const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrlLogin))))

export default store