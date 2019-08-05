import styled from 'styled-components'
import PropTypes from 'prop-types'

import Backdrop from './backdrop'
import Button from './button'
import Form from './form'

const ModalWrapper = styled.div`
  position: fixed;
  min-width: 40vw;
  /* min-height: 80vh; */
  /* top: 50%; */
  top: 10%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  transform: translateX(-50%);
  border-radius: 0.5rem;
  z-index: 500;
  background-color: white;
  padding: 2rem;

  font-family: ${({ theme }) => theme.font.family.openSans};
  /* text-align: center; */
  /* line-height: 1; */

  pre {
    color: ${({ theme }) => theme.colors.darkgrey};
    font-family: ${({ theme }) => theme.font.family.openSans};
    text-align: left;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

// const Modal = ({ mode, show, close, deleteAction, children, poemData }) => {
const Modal = ({ mode, show, close, deleteAction, poemData }) => {
  let modalContent

  // const poemData = {
  //   author: 'Anonymous',
  // }

  if (mode === 'view') {
    // This should be children in the end
    // modalContent = <>{children}</>
    modalContent = (
      <>
        <h1>{poemData.title}</h1>
        <h2>{`by ${poemData.author}`}</h2>
        <pre>
          <p>{poemData.content}</p>
        </pre>
      </>
    )
  }
  if (mode === 'edit') {
    modalContent = (
      <>
        <Form mode="edit" poemData={poemData} />
      </>
    )
  }
  if (mode === 'delete') {
    modalContent = (
      <>
        <h1>Are you sure you want to delete this poem?</h1>
        <ButtonsWrapper>
          <Button color="red" type="button" onClick={deleteAction}>
            Yes
            <span role="img" aria-label="collision emoji">
              💥
            </span>
          </Button>
          <Button color="green" type="button" onClick={close}>
            No
            <span role="img" aria-label="collision emoji">
              🌻
            </span>
          </Button>
        </ButtonsWrapper>
      </>
    )
  }

  return (
    <>
      {show && (
        <>
          <Backdrop close={close} />
          <ModalWrapper>{modalContent}</ModalWrapper>
        </>
      )}
    </>
  )
}

Modal.propTypes = {
  mode: PropTypes.oneOf(['view', 'edit', 'delete', 'closed']).isRequired,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  // children: PropTypes.node.isRequired,
  poemData: PropTypes.shape({
    author: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default Modal
