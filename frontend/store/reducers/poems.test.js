import poems from './poems'

// import actionTypes from '../actions/actionTypes'
import * as poemsActions from '../actions/poemsActions'

const initialState = {
  poems: [],
  selectedPoemId: null,
  isFetching: false,
  isDeleting: false,
  error: null,
}

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

describe('Poems reducer', () => {
  test('should return the initial state', () => {
    expect(poems(undefined, {})).toEqual({
      poems: [],
      selectedPoemId: null,
      isFetching: false,
      isDeleting: false,
      error: null,
    })
  })

  test('should handle SELECT_POEM', () => {
    expect(poems(initialState, poemsActions.selectPoem('abc123'))).toEqual({
      poems: [],
      selectedPoemId: 'abc123',
      isFetching: false,
      isDeleting: false,
      error: null,
    })
  })

  test('should handle DESELECT_POEM', () => {
    expect(poems(initialState, poemsActions.deselectPoem())).toEqual({
      poems: [],
      selectedPoemId: null,
      isFetching: false,
      isDeleting: false,
      error: null,
    })
  })

  test('should handle FETCH_POEMS_REQUEST', () => {
    expect(poems(initialState, poemsActions.fetchPoemsRequest())).toEqual({
      poems: [],
      selectedPoemId: null,
      isFetching: true,
      isDeleting: false,
      error: null,
    })
  })

  test('should handle FETCH_POEMS_SUCCESS', () => {
    expect(poems(initialState, poemsActions.fetchPoemsSuccess(data))).toEqual({
      poems: data,
      selectedPoemId: null,
      isFetching: false,
      isDeleting: false,
      error: null,
    })
  })
})
