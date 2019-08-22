import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from './navigation'

const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightgrey};
  min-height: 100vh;
  width: 100%;
  padding: 2rem 4rem;
`

const Layout = ({ children }) => {
  return (
    <OuterWrapper>
      <Navigation />
      {children}
    </OuterWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
