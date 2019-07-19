import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

// const DummyData = {
//   author: 'Hugo Claus',
//   volume: 'Oostakkerse gedichten',
//   year: '1955',
//   title: 'Marsua',
//   content: 'De koorts van mijn lied, de landwijn van mijn stem...',
// }

const PoemWrapper = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 0.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);

  h3 {
    font-family: ${({ theme }) => theme.font.family.openSans};
    font-size: 2rem;
  }
  p {
    font-family: ${({ theme }) => theme.font.family.openSans};
    font-size: 1.6rem;
  }
`

const GradientBox = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.gradients.JShine};
`

const Poem = ({ author, volume, year, title, content }) => {
  return (
    <PoemWrapper>
      <GradientBox />
      <h3>{author}</h3>
      <h3>{volume}</h3>
      <h3>{year}</h3>
      <h3>{title}</h3>
      <p>{content}</p>
      <GradientBox />
    </PoemWrapper>
  )
}

Poem.propTypes = {
  author: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Poem
