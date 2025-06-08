import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`

const Text = styled.p`
  margin: 10px auto 0 auto;
`

export default function Footer() {
  return (
    <Container>
      <Text>Yoann L'hostis, Developper</Text>
      <Text>@2025</Text>
    </Container>
  )
}
