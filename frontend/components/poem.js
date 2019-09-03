import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import styled from 'styled-components'

import {
  showModalView,
  showModalEdit,
  showModalDelete,
} from '../store/actions/modalActions'

import Button from './button'

const PoemWrapper = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  border-radius: 0.5rem;
  margin: 2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);
  font-family: ${({ theme }) => theme.font.family.openSans};
  text-align: center;

  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }

  h3,
  h4 {
    margin: 0;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const MetaDataElement = styled.div`
  h3 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgrey};
    display: inline-block;
  }

  h4 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`

export const Poem = ({ id, author, volume, year, title, dispatch }) => {
  return (
    <PoemWrapper>
      <MetaDataElement>
        <h3>{author}</h3>
        <h4>Author</h4>
      </MetaDataElement>

      <MetaDataElement>
        <h3>{volume}</h3>
        <h4>Volume</h4>
      </MetaDataElement>

      <MetaDataElement>
        <h3>{year}</h3>
        <h4>Year of publication</h4>
      </MetaDataElement>

      <MetaDataElement>
        <h3>{title}</h3>
        <h4>Title</h4>
      </MetaDataElement>

      <h1>Redux actions</h1>

      <ButtonsWrapper>
        <Button color="#764abc" onClick={() => dispatch(showModalView(id))}>
          View
        </Button>
        <Button color="#764abc" onClick={() => dispatch(showModalEdit(id))}>
          Edit
        </Button>
        <Button color="#764abc" onClick={() => dispatch(showModalDelete(id))}>
          Delete
        </Button>
      </ButtonsWrapper>
    </PoemWrapper>
  )
}

Poem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,

  dispatch: PropTypes.func.isRequired,
}

export default connect()(Poem)
