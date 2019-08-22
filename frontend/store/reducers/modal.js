import actionTypes from '../actions/actionTypes'

const initialState = {
  showModal: false,
  mode: '',
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        mode: action.mode,
      }
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        mode: '',
      }
    default:
      return state
  }
}

export default modalReducer
