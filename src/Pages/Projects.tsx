import styled from 'styled-components'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

import seven from '../assets/seven_minutes_workout.png'
import flip from '../assets/flip.png'
import oneWord from '../assets/one_word.png'
import fast from '../assets/fast.png'
import lfdlf from '../assets/lfdlf.png'
import pendu from '../assets/pendu.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerProject = styled.a`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 25px auto;
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
`

const Photo = styled.img`
  width: 100%;
  margin: auto;
  margin: 25px auto;

  @media (max-width: 800px) {
    width: 95%;
  }
`

const ContainerText = styled.section`
  width: 75%;
  margin: auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Text = styled.p`
  margin: auto;
  font-size: 1.3em;
`

const TextColorStatus = styled.div`
  display: flex;
  margin: auto;
`

const ColoredTextRed = styled.p`
  color: red;
  font-size: 1.3em;
  margin: auto 0 auto 10px;
`

const ColoredTextOrange = styled.p`
  color: orange;
  font-size: 1.3em;
  margin: auto 0 auto 10px;
`

const ColoredTextGreen = styled.p`
  color: green;
  font-size: 1.3em;
  margin: auto 0 auto 10px;
`

export default function Projects() {
  return (
    <Container>
      <Header />
      <ContainerProject>
        <Title>Seven Minutes Workout</Title>
        <Text>Stack :</Text>
        <Text>React + Vite</Text>
        <Text>Express</Text>
        <Text>MongoDB</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Vercel</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextOrange>WIP</ColoredTextOrange>
        </TextColorStatus>
        <Photo src={seven} alt="" />
        <ContainerText>
          <Text>
            Les fameux exercices du Seven Minutes Workout, mais avec une
            particularité : l'utilisateur peut moduler les temps de workout et
            les pauses comme il le souhaite.
          </Text>
          <Text>Business Model: abonnement et affiliation.</Text>
        </ContainerText>
      </ContainerProject>
      <ContainerProject>
        <Title>Fl!p</Title>
        <Text>Stack :</Text>
        <Text>React + Vite</Text>
        <Text>Express</Text>
        <Text>MongoDB</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Vercel</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextOrange>WIP</ColoredTextOrange>
        </TextColorStatus>
        <Photo src={flip} alt="" />
        <ContainerText>
          <Text>
            Un memory où les cartes provoquent des actions sur le plateau du
            jeu. Se joue à deux online.
          </Text>
          <Text>Business Model: publicité.</Text>
        </ContainerText>
      </ContainerProject>
      <ContainerProject>
        <Title>One Word</Title>
        <Text>Stack :</Text>
        <Text>React + Next</Text>
        <Text>Express</Text>
        <Text>MongoDB</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Vercel</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextOrange>WIP</ColoredTextOrange>
        </TextColorStatus>
        <Photo src={oneWord} alt="" />
        <ContainerText>
          <Text>
            L'idée ici est d'apprendre un mot ou une expression chaque jour dans
            la ou les langues que l'on souhaite apprendre. À terme ce sera une
            application mobile.
          </Text>
          <Text>Business Model: abonnement et affiliation.</Text>
        </ContainerText>
      </ContainerProject>
      <ContainerProject>
        <Title>fast</Title>
        <Text>Stack :</Text>
        <Text>React Native + Expo</Text>
        <Text>Express</Text>
        <Text>MongoDB</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Apple Store / Google Play</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextRed>POC</ColoredTextRed>
        </TextColorStatus>
        <Photo src={fast} alt="" />
        <ContainerText>
          <Text>
            Je ne vais volontairement pas expliquer en quoi consiste ce projet
            ici, car il peut être game changer pour moi (sorry). Pour faire
            simple, l'idée est de partager de la manière la plus rapide et
            optimisée possible certaines informations... (...mais on en discute
            en entretien si vous voulez ;) ).
          </Text>
          <Text>
            Business Model: achat pour débloquer toutes les fonctionnalités.
          </Text>
        </ContainerText>
      </ContainerProject>
      <Title>Bonus :</Title>
      <ContainerProject
        href="https://lesflibustiersdelafinance.fr/"
        target="_blank"
      >
        <Title>Les Flibustiers de la Finance</Title>
        <Text>Stack:</Text>
        <Text>Wordpress</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Ionos</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextGreen>Production</ColoredTextGreen>
        </TextColorStatus>
        <Photo src={lfdlf} alt="" />
        <ContainerText>
          <Text>
            Un petit blog dev perso / business / cryptos / éducation financière
            sans prétention que j'alimente tranquillement quand j'ai le temps
            (j'écris entièrement mes articles sans IA, c'est volontairement une
            marque de fabrique).
          </Text>
          <Text>Business Model: abonnement et affiliation.</Text>
        </ContainerText>
      </ContainerProject>
      <ContainerProject href="https://yoannlh.github.io/pendu/" target="_blank">
        <Title>Pendu (pour décompresser après le boulot ;) )</Title>
        <Text>Stack :</Text>
        <Text>HTML + CSS + Typescript</Text>
        <Text>Deployment - CI / CD :</Text>
        <Text>Github Pages</Text>
        <TextColorStatus>
          <Text>Status :</Text>
          <ColoredTextGreen>Production</ColoredTextGreen>
        </TextColorStatus>
        <Photo src={pendu} alt="" />
        <ContainerText>
          <Text>
            Un petit pendu tout ce qu'il y a de plus classique, développé en une
            aprèm pour un challenge (oui, le design est affreux, j'avais plus le
            temps ^^). Il y a environ 1600 mots (français) à trouver.
          </Text>
          <Text>Business Model: none.</Text>
        </ContainerText>
      </ContainerProject>
      <Footer />
    </Container>
  )
}
