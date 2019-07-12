import PropTypes from 'prop-types'

import styled from 'styled-components'

// import { ThemeProvider } from 'styled-components'
// import Theme from '../utils/theme'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  width: 100vw;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <>{children}</>
    </Wrapper>
  )
}
// const Layout = ({ children }) => {
//   return (
//     <ThemeProvider theme={Theme}>
//       <>{children}</>
//     </ThemeProvider>
//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
