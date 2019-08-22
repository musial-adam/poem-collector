import styled from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 1.6rem;
  padding: 0.5rem;
  width: 7rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.2, props.color)};
  }
`

export default Button
