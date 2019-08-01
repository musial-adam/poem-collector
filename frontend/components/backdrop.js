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

const Backdrop = ({ show, close }) => {
  return <>{show && <BackdropWrapper onClick={close} />}</>
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default Backdrop