import styled from 'styled-components'

import Layout from '../components/layout'

const StyledIndex = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.font.family.openSans};
    font-size: 3rem;
    color: #12c2e9;
  }
`

const Home = () => {
  return (
    <Layout>
      <StyledIndex>
        <h1>Welcome in Poem Collector</h1>
      </StyledIndex>
    </Layout>
  )
}

export default Home
