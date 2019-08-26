import { combineReducers } from 'redux'
import modal from './modal'
import poems from './poems'
import filters from './filters'

export default combineReducers({
  modal,
  poems,
  filters,
})
