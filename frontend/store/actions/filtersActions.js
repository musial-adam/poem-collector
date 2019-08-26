import actionTypes from './actionTypes'

export const filterPoemsByYear = () => {
  return {
    type: actionTypes.FILTER_POEMS_BY_YEAR,
  }
}

export const filterPoemsByAuthor = () => {
  return {
    type: actionTypes.FILTER_POEMS_BY_AUTHOR,
  }
}
