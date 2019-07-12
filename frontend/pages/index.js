import styled from 'styled-components'

import Layout from '../components/layout'

// const StyledP = styled.p`
//   color: ${({ theme }) => theme.secCol};
// `

const StyledP = styled.p`
  color: blue;
`

const Home = () => {
  return (
    <Layout>
      <h1>this is some header</h1>
      <StyledP>cos tu pisze</StyledP>
    </Layout>
  )
}
// function Home() {
//   console.log(props.theme)
//   return (
//     <Layout>
//       <h1>this is</h1>
//       <StyledP>cos tu pisze</StyledP>
//     </Layout>
//   )
// }

export default Home
