// import { shallow, mount } from 'enzyme'
import { mount } from 'enzyme'

import { ThemeProvider } from 'styled-components'
import { Poem } from './poem'
import Button from './button'

import theme from '../utils/theme'

describe('<Poem />', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Poem
        id="a"
        author="a"
        volume="a"
        year={2019}
        title="a"
        dispatch={() => null}
      />
    </ThemeProvider>
  )

  // test('Component includes Button', () => {
  //   expect(wrapper.find(Button)).toHaveLength(3)
  // })

  // test('Component contains exactly four h3 and h4', () => {
  //   // expect(wrapper.containsMatchingElement(<h4>Volume</h4>)).toEqual(true)
  //   expect(wrapper.find('h3')).toHaveLength(4)
  //   expect(wrapper.find('h4')).toHaveLength(4)
  // })

  test('Component receives all props', () => {
    expect(wrapper.find(Poem)).toHaveProp({ id: 'a' })
  })
  test('Component contains three Buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(3)
  })
})
