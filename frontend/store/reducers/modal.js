import actionTypes from '../actions/actionTypes'

const initialState = {
  showModal: false,
  mode: '',
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        mode: action.mode,
      }
    case actionTypes.HIDE_MODAL:
    case actionTypes.DELETE_POEM_SUCCESS:
    case actionTypes.EDIT_POEM_SUCCESS:
      return {
        ...state,
        showModal: false,
        mode: '',
      }
    default:
      return state
  }
}

export default modal
