import actionTypes from './actionTypes'

import { selectPoem } from './poemsActions'

export const showModal = mode => {
  return {
    type: actionTypes.SHOW_MODAL,
    mode,
  }
}

export const showModalView = id => {
  return dispatch => {
    dispatch(selectPoem(id))
    dispatch({
      type: actionTypes.SHOW_MODAL,
      mode: 'view',
    })
  }
}

export const showModalEdit = id => {
  return dispatch => {
    dispatch(selectPoem(id))
    dispatch({
      type: actionTypes.SHOW_MODAL,
      mode: 'edit',
    })
  }
}

export const showModalDelete = id => {
  return dispatch => {
    dispatch(selectPoem(id))
    dispatch({
      type: actionTypes.SHOW_MODAL,
      mode: 'delete',
    })
  }
}

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL,
  }
}
