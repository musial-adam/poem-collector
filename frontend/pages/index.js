import styled from 'styled-components'

import Layout from '../components/layout'

const StyledIndex = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.font.family.prozaLibre};
  }

  p {
    font-family: ${({ theme }) => theme.font.family.openSans};
  }
`

const Home = () => {
  return (
    <Layout>
      <StyledIndex>
        <h1>this is some header</h1>
        <p>this is some paragraph</p>
      </StyledIndex>
    </Layout>
  )
}

export default Home
