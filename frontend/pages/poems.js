import { useState, useEffect } from 'react'

import styled from 'styled-components'

import Layout from '../components/layout'
import Poem from '../components/poem'

// const DummyData = {
//   author: 'Hugo Claus',
//   volume: 'Oostakkerse gedichten',
//   year: '1955',
//   title: 'Marsua',
//   content: 'De koorts van mijn lied, de landwijn van mijn stem...',
// }

const PoemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 3rem;
`

const Poems = () => {
  const [poems, setPoems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/api/poems')
      const data = await res.json()
      setPoems(data)
      setLoading(false)
    }
    fetchData()
    // console.log(poems)
  }, [])
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/poems')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(resData => {
  //       console.log('I have something here')
  //       console.log(JSON.stringify(resData))
  //       setPoems(resData)
  //       setLoading(false)
  //     })
  // }, [])

  return (
    <Layout>
      <PoemsWrapper>
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          poems.map(poem => (
            <Poem
              key={poem.key}
              author={poem.author}
              volume={poem.volume}
              year={poem.year}
              title={poem.title}
            />
          ))
        )}
      </PoemsWrapper>
    </Layout>
  )
}

export default Poems
