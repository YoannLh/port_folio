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
  width: 95%;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
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
  width: 100%;
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
  font-size: 1.4em;

  @media (max-width: 800px) {
    padding: 0;
  }
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
          <Text>Hello :)</Text>
          <Text>
            Je suis un développeur, plutôt orienté front-end (spécialisé sur
            ReactJS).
          </Text>
          <Text>
            J'ai deux diplômes : un Bac+2 Développeur web junior et un Bac+3/4
            Concepteur Développeur d'Application.
          </Text>
          <Text>
            J'ai déjà travaillé en CDI dans une startup (life!) et fais pas mal
            de missions diverses et variées pour différents clients: un
            restaurant, une prof de yoga, un négociant en vin, une boutique de
            meubles, une boutique en ligne de mode etc).
          </Text>
        </ContainerText>
      </ContainerPhotoAndText>
      <Footer />
    </Container>
  )
}
