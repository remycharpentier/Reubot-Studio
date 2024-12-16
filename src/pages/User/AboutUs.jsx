import imgTeam7 from "../../assets/img/company/team7.jpg";
import imgTeam8 from "../../assets/img/company/team8.jpg";
import imgTeam9 from "../../assets/img/company/team9.jpg";
import imgTeam12 from "../../assets/img/company/team12.png";

import { StyledAboutUs } from "../../components/styles/AboutUs.styled";
import TeamPhotoBoard from "../../components/ui/TeamPhotoBoard";
import { Col, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <StyledAboutUs>
        <article>
          <h1>Présentation de notre équipe du Studio</h1>
          <p>
            Bienvenue dans notre studio de développement de jeux vidéo situé à
            Bordeaux, où la passion pour le jeu rencontre l'innovation et la
            créativité ! Notre équipe est composée de professionnels talentueux
            et dévoués, chacun apportant une expertise unique pour donner vie à
            des expériences de jeu captivantes.
          </p>
          <div className="titre-ligne">
            <h2>Notre Équipe</h2>
          </div>
          <img src={imgTeam8} alt="" className="team-img team-img1" />
          <h3>Les Designers de Jeux</h3>
          <p>
            Nos designers sont les architectes de l'expérience ludique. Ils
            imaginent des mécaniques de jeu innovantes et créent des mondes
            immersifs qui captivent les joueurs. Leur créativité sans limites et
            leur compréhension des tendances du marché nous permettent de
            concevoir des jeux qui se démarquent.
          </p>
          <h3>Les Développeurs</h3>
          <p>
            Nos développeurs sont les magiciens derrière le code. Spécialisés
            dans divers langages et technologies, ils transforment les idées en
            réalité. Que ce soit pour le gameplay, l'intelligence artificielle
            ou l'optimisation des performances, leur expertise technique
            garantit des jeux fluides et engageants.
          </p>

          <Row>
            <Col xxl={6}>
              <img src={imgTeam9} alt="" className="team-img team-img2" />
            </Col>
            <Col xxl={6}>
              <h3>Les Artistes</h3>
              <p>
                Notre équipe artistique est responsable de l'esthétique de nos
                jeux. Des graphistes aux animateurs, chaque membre contribue à
                créer des visuels époustouflants qui plongent les joueurs dans
                des univers uniques. Leur sens du détail et leur passion pour
                l'art numérique font de chaque projet une œuvre d'art.
              </p>
              <h3>Les Compositeurs et Sound Designers</h3>
              <p>
                La musique et le son jouent un rôle crucial dans l'immersion des
                joueurs. Nos compositeurs et sound designers travaillent main
                dans la main pour créer des bandes sonores mémorables et des
                effets sonores qui enrichissent l'expérience de jeu.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Les Testeurs</h3>
              <p>
                Avant le lancement de chaque jeu, notre équipe de testeurs
                s'assure que tout fonctionne parfaitement. Ils identifient les
                bugs, évaluent l'expérience utilisateur et fournissent des
                retours précieux pour garantir que nos jeux répondent aux
                attentes des joueurs.
              </p>
              <Col>
                <img src={imgTeam7} alt="" className="team-img team-img3" />
              </Col>
            </Col>
          </Row>

          <div className="titre-ligne">
            <h2>Trombinoscope</h2>
          </div>
          <TeamPhotoBoard />
          <div className="titre-ligne">
            <h2>Notre Vision</h2>
          </div>
          <div className="d-inline-block">
            <img src={imgTeam12} alt="" className="team-img" />
            <p>
              Chez Reubot Studio, nous croyons que le jeu vidéo est un puissant
              moyen de raconter des histoires et de créer des connexions. Notre
              ambition est de devenir un leader dans l'industrie en développant
              des titres mémorables qui allient innovation et profondeur
              narrative.
            </p>
            <p>
              Nous sommes convaincus que l'avenir du jeu vidéo est prometteur,
              avec des technologies comme la réalité virtuelle et l'intelligence
              artificielle ouvrant des possibilités infinies. Nous aspirons à
              bâtir un avenir où la diversité et l'inclusion sont au cœur du
              développement, et où le jeu vidéo est reconnu comme un art capable
              de rassembler les gens et de transformer des vies. Chez Reubot
              Studio, nous sommes prêts à relever ce défi.
            </p>
          </div>
          <div className="titre-ligne">
            <h2>Notre Studio</h2>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <p>
                Notre Studio se situe au coeur de Bordeaux au 45 Rue Thiac 33000
                Bordeaux.
              </p>
              <p>
                Niché au cœur de la magnifique ville de Bordeaux, notre studio
                de développement de jeux vidéo s'inscrit dans un écosystème
                dynamique et innovant. Bordeaux, réputée pour son riche
                patrimoine culturel et son ambiance créative, est le lieu idéal
                pour donner vie à des idées audacieuses et à des expériences de
                jeu captivantes.
              </p>
              <p>
                En tant que studio basé à Bordeaux, nous profitons d'un
                environnement inspirant, où l'art, la technologie et
                l'innovation se rencontrent. La ville est un véritable carrefour
                pour les talents créatifs, et nous collaborons régulièrement
                avec d'autres studios, artistes et institutions locales pour
                enrichir notre processus de développement.
              </p>
            </Col>
            <Col md={6} className="mb-4 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5657.820982734937!2d-0.5870600233961524!3d44.84375617462087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e7258f8609%3A0x6f2ebbf2e4ca2a2a!2s45%20Rue%20Thiac%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1734379143481!5m2!1sfr!2sfr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="studio-img"
                alt="Location"
              ></iframe>
            </Col>
          </Row>
        </article>
      </StyledAboutUs>
    </>
  );
}
