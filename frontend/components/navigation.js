import styled from 'styled-components'
import Link from 'next/link'

const StyledNavigation = styled.nav`
  /* border: 1px solid orange; */

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* justify-content: space-around; */
    li {
      display: inline-block;
      color: pink;
    }
  }
`

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 3rem;
  text-decoration: none;
  margin-right: 2rem;

  color: ${({ theme }) => theme.colors.darkBlue};
`

const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link href="/" prefetch passHref>
          <StyledLink>Home</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/add-poem" prefetch passHref>
          <StyledLink>Add</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="/poems" prefetch passHref>
          <StyledLink>All items</StyledLink>
        </Link>
      </li>
    </ul>
  </StyledNavigation>
)

export default Navigation
