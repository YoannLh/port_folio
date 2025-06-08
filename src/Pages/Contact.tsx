import styled from 'styled-components'

import Footer from '../Components/Footer'
import Header from '../Components/Header'

import enveloppe from '../assets/envelope.svg'
import linkedin from '../assets/linkedin.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ContainerMedia = styled.section`
  display: flex;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Media = styled.a`
  display: flex;
  width: 200px;
  height: 200px;
  margin: 0 50px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 800px) {
    margin: 25px auto;
  }
}
`

const IconMedia = styled.img`
  height: 50px;
  margin: auto;
`

export default function Contact() {
  return (
    <Container>
      <Header />
      <ContainerMedia>
        <Media href="mailto:lhostis.yoann@gmail.com">
          <IconMedia src={enveloppe} alt="icone d'une enveloppe" />
        </Media>
        <Media
          href="https://www.linkedin.com/in/yoann-l-hostis-b28981165/"
          target="_blank"
        >
          <IconMedia src={linkedin} alt="logo linkedin" />
        </Media>
      </ContainerMedia>

      <Footer />
    </Container>
  )
}
