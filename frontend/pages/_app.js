import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../utils/theme'
import GlobalStyle from '../utils/global-styles'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
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
