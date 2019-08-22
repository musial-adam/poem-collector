/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

// const exampleInitialState = {
//   poems: [],
//   selectedPoemId: null,
//   isFetching: false,
//   isDeleting: false,
//   poemsCount: 0,
// }

export function initializeStore() {
  // export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
// import poemsReducer from './reducers/poems'

// const exampleInitialState = {
//   poems: [],
//   selectedPoemId: null,
//   isFetching: false,
//   isDeleting: false,
//   poemsCount: 0,
// }

// export function initializeStore(initialState = exampleInitialState) {
//   return createStore(
//     poemsReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   )
// }
