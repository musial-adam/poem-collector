import { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Layout from '../components/layout'
import Poem from '../components/poem'
import Modal from '../components/modal'

import { fetchPoems } from '../store/actions/poemsActions'

const PoemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem 0rem;
`

export const Poems = ({ poems, dispatch }) => {
  useEffect(() => {
    dispatch(fetchPoems())
  }, [dispatch])
  // useEffect(() => {
  //   dispatch(fetchPoems())
  // }, [dispatch])

  // console.log(props.poems)

  // const poemsList = []
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
      <Modal />
    </Layout>
  )
}

Poems.propTypes = {
  poems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { poems } = state.poems
  return { poems }
}

// const mapDispatchToProps = {
//   fetchPoems,
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Poems)
