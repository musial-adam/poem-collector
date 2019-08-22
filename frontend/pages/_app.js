import App, { Container } from 'next/app'
import React from 'react'

import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import withReduxStore from '../lib/with-redux-store'
import Theme from '../utils/theme'
import GlobalStyle from '../utils/global-styles'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Container>
          <GlobalStyle />
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)

// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props
//     return (
//       <Container>
//         <GlobalStyle />
//         <ThemeProvider theme={Theme}>
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </Container>
//     )
//   }
// }

// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props
//     return (
//       <Container>
//         <ThemeProvider theme={Theme}>
//           <>
//             <GlobalStyle />
//             <Component {...pageProps} />
//           </>
//         </ThemeProvider>
//       </Container>
//     )
//   }
// }
