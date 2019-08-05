import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Modal from './modal'
import Button from './button'

const PoemWrapper = styled.div`
  width: 300px;
  height: 400px;
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

// const Poem = ({ author, volume, year, title, content, handleDelete }) => {
const Poem = ({ author, volume, year, title, content, deletePoem }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState('closed')

  const handleClose = () => {
    setModalMode('closed')
    setShowModal(false)
  }

  const handleView = () => {
    setModalMode('view')
    setShowModal(true)
  }

  const handleEdit = () => {
    setModalMode('edit')
    setShowModal(true)
  }

  const handleDelete = () => {
    setModalMode('delete')
    setShowModal(true)
  }

  const poemData = { author, volume, year, title, content }

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

      {/* <p>{content}</p> */}

      <ButtonsWrapper>
        <Button color="#29b6f6" onClick={handleView}>
          View
        </Button>
        <Button color="#ffd54f" onClick={handleEdit}>
          Edit
        </Button>
        <Button color="#ff5252" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonsWrapper>

      {/* <Backdrop close={handleClose} show={showModal} />
      <Modal mode={modalMode} show={showModal} deleteAction={deletePoem}> */}

      {/* <Backdrop close={handleClose} show={showModal} /> */}
      <Modal
        mode={modalMode}
        show={showModal}
        close={handleClose}
        deleteAction={deletePoem}
        poemData={poemData}
      >
        {/* <p>{author}</p>
        <p>{volume}</p>
        <p>{year}</p>
        <p>{title}</p> */}
        {/* <h1>{title}</h1>
        <h2>{`by ${author}`}</h2>
        <pre>
          <p>{content}</p>
        </pre> */}
      </Modal>
    </PoemWrapper>
  )
}

Poem.propTypes = {
  author: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deletePoem: PropTypes.func.isRequired,
}

export default Poem
