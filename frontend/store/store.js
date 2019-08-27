/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

export function initializeStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}
