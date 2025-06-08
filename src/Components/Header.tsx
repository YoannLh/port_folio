import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 150px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Logo = styled(Link)`
  font-family: Licorice;
  font-size: 6em;
  text-decoration: none;
  color: yellow;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 4.5em;
    text-align: center;
  }
`

const Menu = styled.nav`
  display: flex;

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
`

const LinkMenu = styled(Link)`
  margin-left: 50px;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
`

// interface HeaderProps {
//   text: string
// }

export default function Header() {
  return (
    <Container>
      <Logo to="/">Yoann L'hostis</Logo>
      <Menu>
        <LinkMenu to="/projects">Projects</LinkMenu>
        <LinkMenu to="/contact">Contact</LinkMenu>
      </Menu>
    </Container>
  )
}
