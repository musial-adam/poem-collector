import styled from 'styled-components'
import { lighten, darken } from 'polished'

const Button = styled.button`
  /* background-color: ${({ theme }) => theme.colors.darkgrey}; */
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
    /* background-color: ${lighten(0.2, '#49515C')}; */
    background-color: ${props => darken(0.1, props.color)};
  }
`

export default Button
