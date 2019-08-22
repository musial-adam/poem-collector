import axios from 'axios'

import actionTypes from './actionTypes'

export const selectPoem = id => {
  return {
    type: actionTypes.SELECT_POEM,
    id,
  }
}

export const fetchPoemsRequest = () => {
  return {
    type: actionTypes.FETCH_POEMS_REQUEST,
  }
}

export const fetchPoemsSuccess = data => {
  return {
    type: actionTypes.FETCH_POEMS_SUCCESS,
    data,
  }
}

export const fetchPoemsFailure = () => {
  return {
    type: actionTypes.FETCH_POEMS_FAILURE,
  }
}

export const fetchPoems = () => {
  return dispatch => {
    dispatch(fetchPoemsRequest())
    return axios
      .get('http://localhost:3001/api/poems')
      .then(res => res.data)
      .then(data => dispatch(fetchPoemsSuccess(data)))
  }
}

export const deletePoemRequest = () => {
  return {
    type: actionTypes.DELETE_POEM_REQUEST,
  }
}

export const deletePoemSuccess = id => {
  return {
    type: actionTypes.DELETE_POEM_SUCCESS,
    id,
  }
}

export const deletePoemFailure = () => {
  return {
    type: actionTypes.DELETE_POEM_FAILURE,
  }
}

export const deletePoem = id => {
  return dispatch => {
    dispatch(deletePoemRequest())
    const url = `http://localhost:3001/api/poems/${id}`
    return axios.delete(url).then(res => {
      if (res.status === 200) {
        dispatch(deletePoemSuccess(id))
      } else {
        dispatch(deletePoemFailure())
      }
    })
  }
}
