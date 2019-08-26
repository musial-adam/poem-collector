import actionTypes from '../actions/actionTypes'

const initialState = {
  filter: 'NONE',
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_POEMS_BY_YEAR:
      return {
        ...state,
        filter: 'YEAR',
      }
    case actionTypes.FILTER_POEMS_BY_AUTHOR:
      return {
        ...state,
        filter: 'AUTHOR',
      }
    default:
      return state
  }
}

export default filters
