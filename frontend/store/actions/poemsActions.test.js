import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import actionTypes from './actionTypes'
import * as poemsActions from './poemsActions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Poems actions [sync]', () => {
  test('should create an action to select a poem based on id', () => {
    const id = 'abc123'
    const expectedAction = {
      type: actionTypes.SELECT_POEM,
      id,
    }
    expect(poemsActions.selectPoem(id)).toEqual(expectedAction)
  })

  test('should create an action to deselect a poem', () => {
    const expectedAction = {
      type: actionTypes.DESELECT_POEM,
    }
    expect(poemsActions.deselectPoem()).toEqual(expectedAction)
  })

  test('should create an action to start fetching poems request', () => {
    const error = 'Random error happened'
    const expectedAction = {
      type: actionTypes.FETCH_POEMS_FAILURE,
      error,
    }
    expect(poemsActions.fetchPoemsFailure(error)).toEqual(expectedAction)
  })

  test('should create an action to handle successful fetching poems request', () => {
    const data = [
      {
        _id: 'abc123',
        author: 'John Doe',
        volume: 'Volume 1',
        year: 2000,
        title: 'Mock title',
        content: 'One\nTwo\nThree',
        __v: 0,
      },
      {
        _id: 'efg456',
        author: 'Jane Smith',
        volume: 'Volume 2',
        year: 2019,
        title: 'Another mock title',
        content: 'Empty poem',
        __v: 0,
      },
    ]
    const expectedAction = {
      type: actionTypes.FETCH_POEMS_SUCCESS,
      data,
    }
    expect(poemsActions.fetchPoemsSuccess(data)).toEqual(expectedAction)
  })

  test('should create an action to handle failed fetching poems request', () => {
    const error = 'Random error happened'
    const expectedAction = {
      type: actionTypes.FETCH_POEMS_FAILURE,
      error,
    }
    expect(poemsActions.fetchPoemsFailure(error)).toEqual(expectedAction)
  })

  //! PLACE FOR ASYNC FETCH POEMS TEST

  test('should create an action to start deleting poem request', () => {
    const expectedAction = {
      type: actionTypes.DELETE_POEM_REQUEST,
    }
    expect(poemsActions.deletePoemRequest()).toEqual(expectedAction)
  })

  test('should create an action to handle successful deleting poem request', () => {
    const id = 'abc123'
    const expectedAction = {
      type: actionTypes.DELETE_POEM_SUCCESS,
      id,
    }
    expect(poemsActions.deletePoemSuccess(id)).toEqual(expectedAction)
  })

  test('should create an action to handle failed deleting poem request', () => {
    const error = 'Random error happened'
    const expectedAction = {
      type: actionTypes.DELETE_POEM_FAILURE,
      error,
    }
    expect(poemsActions.deletePoemFailure(error)).toEqual(expectedAction)
  })

  //! PLACE FOR ASYNC DELETE POEMS TEST

  test('should create an action to start editing poem request', () => {
    const expectedAction = {
      type: actionTypes.EDIT_POEM_REQUEST,
    }
    expect(poemsActions.editPoemRequest()).toEqual(expectedAction)
  })

  test('should create an action to handle successful editing poem request', () => {
    const id = 'abc123'
    const updatedPoem = {
      _id: 'abc123',
      author: 'John Doe',
      volume: 'Volume 1',
      year: 2000,
      title: 'Mock title',
      content: 'One\nTwo\nThree',
      __v: 0,
    }
    const expectedAction = {
      type: actionTypes.EDIT_POEM_SUCCESS,
      id,
      updatedPoem,
    }
    expect(poemsActions.editPoemSuccess(id, updatedPoem)).toEqual(
      expectedAction
    )
  })

  test('should create an action to handle failed editing poem request', () => {
    const error = 'Random error happened'
    const expectedAction = {
      type: actionTypes.EDIT_POEM_FAILURE,
      error,
    }
    expect(poemsActions.editPoemFailure(error)).toEqual(expectedAction)
  })
})

// Poems async actions testing
// fetchPoems
// deletePoemw
// editPoem

describe('Poem actions [async]', () => {
  let store

  beforeEach(() => {
    store = mockStore({})
  })

  test('should execute fetch poems', () => {
    return store.dispatch(poemsActions.fetchPoems()).then(() => {
      const actions = store.getActions()
      console.log('actions', actions)
      expect(actions[0]).toEqual(poemsActions.fetchPoemsRequest())
    })
  })
})
