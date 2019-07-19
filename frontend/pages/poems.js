import styled from 'styled-components'

import Layout from '../components/layout'
import Poem from '../components/poem'

const DummyData = {
  author: 'Hugo Claus',
  volume: 'Oostakkerse gedichten',
  year: '1955',
  title: 'Marsua',
  content: 'De koorts van mijn lied, de landwijn van mijn stem...',
}

const PoemsWrapper = styled.div`
  display: flex;
  padding: 3rem;
`

const Poems = () => {
  return (
    <Layout>
      <PoemsWrapper>
        <Poem
          author={DummyData.author}
          volume={DummyData.volume}
          year={DummyData.year}
          title={DummyData.title}
          content={DummyData.content}
        />
        {/* <Poem /> */}
      </PoemsWrapper>
    </Layout>
  )
}

export default Poems
