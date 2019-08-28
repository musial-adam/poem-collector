import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Poem from './poem'

// const ExampleComponent = () => (
//   <>
//     <h1>Title</h1>
//     <h2>Subtitle</h2>
//     <h3>One more level deep</h3>
//   </>
// )

describe('my first test', () => {
  const mockStore = configureStore()
  const initialState = {}
  // let store
  // let wrapper

  const store = mockStore(initialState)

  const wrapper = shallow(
    <Provider store={store}>
      <Poem id="a" author="a" volume="a" year={2019} title="a" />
    </Provider>
  )

  console.log(wrapper)

  // beforeEach(() => {
  //   wrapper = shallow(<ExampleComponent />)
  // })

  // test('Component has h1', () => {
  //   expect(wrapper.find('h1')).toHaveLength(1)
  // })
  test('Component has h3', () => {
    // expect(wrapper).toContainMatchingElement('h3')
    expect(wrapper.find('PoemWrappers'))
  })
})
