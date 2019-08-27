import axios from 'axios'

import actionTypes from './actionTypes'

export const selectPoem = id => {
  return {
    type: actionTypes.SELECT_POEM,
    id,
  }
}

export const deselectPoem = () => {
  return {
    type: actionTypes.DESELECT_POEM,
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

export const fetchPoemsFailure = error => {
  return {
    type: actionTypes.FETCH_POEMS_FAILURE,
    error,
  }
}

export const fetchPoems = () => {
  return dispatch => {
    dispatch(fetchPoemsRequest())
    return axios
      .get('http://localhost:3001/api/poems')
      .then(res => res.data)
      .then(data => dispatch(fetchPoemsSuccess(data)))
      .catch(error => dispatch(fetchPoemsFailure(error)))
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

export const deletePoemFailure = error => {
  return {
    type: actionTypes.DELETE_POEM_FAILURE,
    error,
  }
}

export const deletePoem = id => {
  return dispatch => {
    dispatch(deletePoemRequest())
    const url = `http://localhost:3001/api/poems/${id}`
    return axios
      .delete(url)
      .then(res => {
        console.log(res)
        dispatch(deletePoemSuccess(id))
        //   //! !! THIS IS JUST A WORKAROUND - FIND BETTER SOLUTION - MODAL HIDE SHOULD NOT BE DISPATCHED HERE
        dispatch({
          type: actionTypes.HIDE_MODAL,
        })
      })
      .catch(error => {
        console.log('Hi, I am handling failed delete request')
        console.log(error.response)
        dispatch(deletePoemFailure('Deleting poem failed'))
        // dispatch(fetchPoems())
      })
  }
}

export const editPoemRequest = () => {
  return {
    type: actionTypes.EDIT_POEM_REQUEST,
  }
}

export const editPoemSuccess = (id, updatedPoem) => {
  return {
    type: actionTypes.EDIT_POEM_SUCCESS,
    id,
    updatedPoem,
  }
}

export const editPoemFailure = () => {
  return {
    type: actionTypes.EDIT_POEM_FAILURE,
  }
}

export const editPoem = id => {
  return dispatch => {
    dispatch(editPoemRequest())
    const url = `http://localhost:3001/api/poems/${id}`
    axios.get(url).then(res => {
      if (res.status === 200) {
        const updatedPoem = res.data
        dispatch(editPoemSuccess(id, updatedPoem))
        //! !! THIS IS JUST A WORKAROUND - FIND BETTER SOLUTION - MODAL HIDE SHOULD NOT BE DISPATCHED HERE
        dispatch({
          type: actionTypes.HIDE_MODAL,
        })
      } else {
        dispatch(editPoemFailure)
      }
    })
  }
}
