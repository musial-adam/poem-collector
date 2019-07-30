import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const PoemWrapper = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 0.5rem;
  margin: 2rem;
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkgrey};
  color: white;
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 1.6rem;
  padding: 0.5rem;
  width: 7rem;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

// const Poem = ({ author, volume, year, title, content, handleDelete }) => {
const Poem = ({ author, volume, year, title, handleDelete }) => {
  return (
    <PoemWrapper>
      <GradientBox />
      <h3>{author}</h3>
      <h3>{volume}</h3>
      <h3>{year}</h3>
      <h3>{title}</h3>
      {/* <p>{content}</p> */}

      <ButtonsWrapper>
        <Button>View</Button>
        <Button>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ButtonsWrapper>
    </PoemWrapper>
  )
}

Poem.propTypes = {
  author: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default Poem
