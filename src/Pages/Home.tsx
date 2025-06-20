import styled from 'styled-components'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

import photo from '../assets/photo.jpeg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 800px) {
    height: auto;
  }
`

const ContainerPhotoAndText = styled.section`
  display: flex;
  height: 100%;
  width: 95%;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerPhoto = styled.div`
  width: 50%;
  margin: auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Photo = styled.img`
  width: 90%;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const ContainerText = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Text = styled.p`
  padding: 0 25px;
  font-size: 1.5em;

  @media (max-width: 800px) {
    padding: 0;
  }
`

const Span = styled.span`
  font-weight: bold;
`

export default function Home() {
  return (
    <Container>
      <Header />
      <ContainerPhotoAndText>
        <ContainerPhoto>
          <Photo src={photo} alt="photo de Yoann L'hostis développeur" />
        </ContainerPhoto>
        <ContainerText>
          <Text>
            <Span>Hello :)</Span>
          </Text>
          <Text>
            Je suis <Span>développeur</Span>, plutôt orienté web et {'  '}
            <Span>front-end</Span> (spécialisé sur <Span>ReactJS</Span>).
          </Text>
          <Text>
            J'ai deux diplômes : un <Span>Bac+2</Span> Développeur web junior et
            un <Span>Bac+3/4</Span> Concepteur Développeur d'Application.
          </Text>
          <Text>
            J'ai travaillé en CDI dans une <Span>startup</Span> (life!) en 2022
            / 2023 et fait pas mal de <Span>missions</Span> diverses et variées
            depuis pour différents <Span>clients</Span> : un restaurant, une
            prof de yoga, un négociant en vin, une boutique de meubles, une
            boutique e-commerce de vêtements de mode etc).
          </Text>
        </ContainerText>
      </ContainerPhotoAndText>
      <Footer />
    </Container>
  )
}
