import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalWrapper = styled.div`
  position: fixed;
  width: 50vw;
  min-height: 80vh;
  top: 10vh;
  left: 25vw;
  border-radius: 0.5rem;
  z-index: 500;
  background-color: white;
  padding: 2rem;

  font-family: ${({ theme }) => theme.font.family.openSans};
  text-align: center;
  /* line-height: 1; */
`

const Modal = ({ show, mode, deleteAction, children }) => {
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
        <h1>Are you sure you want to delete?</h1>
        <button type="button" onClick={deleteAction}>
          YESSSS
        </button>
      </>
    )
  }

  return (
    <>
      {show && (
        <ModalWrapper>
          {/* <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1>
          <h1>Modal</h1> */}
          {modalContent}
        </ModalWrapper>
      )}
    </>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(['view', 'edit', 'delete']).isRequired,
  deleteAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
