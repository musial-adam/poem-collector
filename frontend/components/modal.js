import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'

import { hideModal } from '../store/actions/modalActions'
import { deletePoem } from '../store/actions/poemsActions'

import Backdrop from './backdrop'
import Button from './button'
import Form from './form'

const ModalWrapper = styled.div`
  position: fixed;
  min-width: 40vw;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  z-index: 500;
  background-color: white;
  padding: 2rem;
  font-family: ${({ theme }) => theme.font.family.openSans};

  pre {
    color: ${({ theme }) => theme.colors.darkgrey};
    font-family: ${({ theme }) => theme.font.family.openSans};
    font-size: 1.4rem;
    text-align: left;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Modal = () => {
  let modalContent

  const dispatch = useDispatch()

  const mode = useSelector(state => state.modal.mode)
  const isShown = useSelector(state => state.modal.showModal)

  // const poem = {}
  const poem = useSelector(state => {
    return state.poems.poems.find(singlePoem => {
      return singlePoem._id === state.poems.selectedPoemId
    })
  })

  console.log('poem', poem)
  //! !! This component seems to be mounted too often
  //! !! Ivestigate - below console.log shows multiple times

  console.log('Hi from Modal')

  switch (mode) {
    case 'view':
      modalContent = (
        <>
          <h1>{poem.title}</h1>
          <h2>{`by ${poem.author}`}</h2>
          <pre>
            <p>{poem.content}</p>
          </pre>
        </>
      )
      break
    case 'edit':
      modalContent = (
        <>
          <Form mode="edit" poemData={poem} />
        </>
      )
      break
    case 'delete':
      modalContent = (
        <>
          <h1>Are you sure you want to delete this poem?</h1>
          <ButtonsWrapper>
            <Button
              color="red"
              type="button"
              onClick={() => dispatch(deletePoem(poem._id))}
            >
              Yes
            </Button>
            <Button
              color="green"
              type="button"
              onClick={() => dispatch(hideModal())}
            >
              No
            </Button>
          </ButtonsWrapper>
        </>
      )
      break
    default:
      modalContent = 'ERROR: UNKNOWN MODE'
      break
  }

  return (
    <>
      {isShown && (
        <>
          <Backdrop close={() => dispatch(hideModal())} />
          <ModalWrapper>{modalContent}</ModalWrapper>
        </>
      )}
    </>
  )
}

export default Modal
