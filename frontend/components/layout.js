import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from './navigation'

const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightgrey};
  min-height: 100vh;
  width: 100vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  padding: 20px 40px;
`

// const InnerWrapper = styled.div`
//   background-color: white;
//   border-radius: 30px;
//   padding: 20px 40px;
//   height: 100%;
//   width: 100%;
//   box-shadow: 2px 4px 15px -6px rgba(0, 0, 0, 0.75);
// `

const Layout = ({ children }) => {
  return (
    <OuterWrapper>
      {/* <InnerWrapper> */}
      <Navigation />
      {children}
      {/* </InnerWrapper> */}
    </OuterWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
