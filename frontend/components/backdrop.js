import styled from 'styled-components'
import PropTypes from 'prop-types'

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 400;
`

// const Backdrop = ({ show, close }) => {
const Backdrop = ({ close, children }) => {
  return <BackdropWrapper onClick={close}>{children}</BackdropWrapper>
}

Backdrop.propTypes = {
  // show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Backdrop
