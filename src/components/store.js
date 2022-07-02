import React from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const baseUrlLogin = 'https://homepoint-server-staging.herokuapp.com'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

// https://homepoint-server-staging.herokuapp.com/api/v1/users/login

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrlLogin))))

const persistor = persistStore(store)

export  { store, persistor }