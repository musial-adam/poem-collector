import { useEffect } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/layout'
import Poem from '../components/poem'

import { fetchPoems } from '../store/actions/poemsActions'

const PoemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem 0rem;
`

const Poems = () => {
  const dispatch = useDispatch()

  const poems = useSelector(state => state.poems.poems)

  useEffect(() => {
    dispatch(fetchPoems())
  }, [dispatch])

  const poemsList = poems.map(poem => (
    <Poem
      key={poem._id}
      id={poem._id}
      author={poem.author}
      volume={poem.volume}
      year={poem.year}
      title={poem.title}
      content={poem.content}
    />
  ))

  return (
    <Layout>
      <PoemsWrapper>{poemsList}</PoemsWrapper>
    </Layout>
  )
}

// const Poems = () => {
//   const [poems, setPoems] = useState([])
//   const [loading, setLoading] = useState(true)
//   // const [editedPoem, setEditedPoem] = useState({})

//   // TODO: refactor to add try-catch block and error handling

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get('http://localhost:3001/api/poems')
//       const { data } = res
//       setPoems(data)
//       setLoading(false)
//     }
//     fetchData()
//   }, [])

//   const deletePoem = async id => {
//     const url = `http://localhost:3001/api/poems/${id}`
//     const res = await axios.delete(url)

//     if (res.status === 200) {
//       const newPoems = poems.filter(poem => {
//         return poem._id !== id
//       })

//       setPoems(newPoems)
//     }
//   }

//   const editPoem = async id => {
//     const editedPoem = poems.find(poem => {
//       return poem._id === id
//     })

//     if (editedPoem) {
//       // setEditedPoem(edited)
//       const url = `http://localhost:3001/api/poems/${id}`

//       try {
//         const res = await axios.get(url)
//         if (res.status === 200) {
//           const updatedPoem = res.data

//           const newPoems = poems.map(poem => {
//             if (poem._id === updatedPoem._id) {
//               return updatedPoem
//             }

//             return poem
//           })

//           setPoems(newPoems)
//         }
//       } catch (error) {
//         console.log('error')
//       }
//     }
//   }

//   const poemsList = poems.map(poem => (
//     <Poem
//       key={poem._id}
//       id={poem._id}
//       author={poem.author}
//       volume={poem.volume}
//       year={poem.year}
//       title={poem.title}
//       content={poem.content}
//       deletePoem={() => deletePoem(poem._id)}
//       editPoem={() => editPoem(poem._id)}
//     />
//   ))

//   return (
//     <Layout>
//       <PoemsWrapper>{loading ? null : poemsList}</PoemsWrapper>
//     </Layout>
//   )
// }

export default Poems
