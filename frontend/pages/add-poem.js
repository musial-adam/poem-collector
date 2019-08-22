import styled from 'styled-components'

import Layout from '../components/layout'
import Form from '../components/form'

const Wrapper = styled.div`
  width: 60vw;
  margin: 5rem auto;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);
`

const AddPoem = () => {
  return (
    <Layout>
      <Wrapper>
        <Form mode="create" />
      </Wrapper>
    </Layout>
  )
}

export default AddPoem
