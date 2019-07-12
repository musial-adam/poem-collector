import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'
import Theme from '../utils/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <>{children}</>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
