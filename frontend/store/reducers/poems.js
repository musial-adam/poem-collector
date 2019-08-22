import actionTypes from '../actions/actionTypes'

const initialState = {
  poems: [],
  selectedPoemId: null,
  isFetching: false,
  isDeleting: false,
}

const poems = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_POEM:
      return {
        ...state,
        selectedPoemId: action.id,
      }

    case actionTypes.FETCH_POEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_POEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        //! !! This may be incorrect, improve the code here
        poems: action.data,
      }
    case actionTypes.FETCH_POEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.DELETE_POEM_REQUEST:
      return {
        ...state,
        isDeleting: true,
      }
    case actionTypes.DELETE_POEM_SUCCESS: {
      const updatedPoems = state.poems.filter(poem => {
        return poem._id !== action.id
      })
      return {
        ...state,
        isDeleting: false,
        poems: updatedPoems,
      }
    }

    default:
      return state
  }
}

export default poems