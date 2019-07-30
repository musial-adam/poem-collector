import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Layout from '../components/layout'
import Poem from '../components/poem'

const PoemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 3rem;
`

const Poems = () => {
  const [poems, setPoems] = useState([])
  const [loading, setLoading] = useState(true)

  // TODO: refactor to add try-catch block and error handling

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3001/api/poems')
      setPoems(data)
      setLoading(false)
      // console.log('USE EFFECT')
    }
    fetchData()
  }, [])

  const handleDelete = async id => {
    const url = `http://localhost:3001/api/poems/${id}`
    const res = await axios.delete(url)

    if (res.status === 200) {
      const newPoems = poems.filter(poem => {
        return poem._id !== id
      })

      setPoems(newPoems)
    }
  }

  const poemsList = poems.map(poem => (
    <Poem
      key={poem._id}
      author={poem.author}
      volume={poem.volume}
      year={poem.year}
      title={poem.title}
      handleDelete={() => handleDelete(poem._id)}
    />
  ))

  return (
    <Layout>
      <PoemsWrapper>{loading ? null : poemsList}</PoemsWrapper>
    </Layout>
  )
}

export default Poems
