import styled from 'styled-components'
import PropTypes from 'prop-types'

import Backdrop from './backdrop'
import Button from './button'

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
  text-align: center;
  /* line-height: 1; */
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Modal = ({ mode, show, close, deleteAction, children }) => {
  let modalContent

  if (mode === 'view') {
    // This should be children in the end
    modalContent = (
      <>
        <h1>Here I will put the poem</h1>
        {children}
      </>
    )
  }
  if (mode === 'edit') {
    modalContent = <h1>Here you will be able to edit the poem</h1>
  }
  if (mode === 'delete') {
    modalContent = (
      <>
        <h1>Are you sure you want to delete this poem?</h1>
        <ButtonsWrapper>
          <Button color="red" type="button" onClick={deleteAction}>
            YESSSS
          </Button>
          <Button color="green" type="button" onClick={close}>
            CANCEL
          </Button>
        </ButtonsWrapper>
      </>
    )
  }

  return (
    <>
      {show && (
        <Backdrop close={close}>
          <ModalWrapper>{modalContent}</ModalWrapper>
        </Backdrop>
      )}
    </>
  )
}

Modal.propTypes = {
  mode: PropTypes.oneOf(['view', 'edit', 'delete']).isRequired,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
