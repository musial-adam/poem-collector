import styled from 'styled-components'

const StyledTest = styled.div`
  height: 50px;
  width: 50px;
  background-color: red;
  /* color: ; */
`

function AddPoem() {
  return (
    <div>
      <h1>test h1 numer 2</h1>
      Welcome to Next.js!
      <StyledTest />
    </div>
  )
}

export default AddPoem
