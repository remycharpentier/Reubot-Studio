/* eslint-disable react/no-unescaped-entities */
import imgTeam from "../../assets/img/team1.jpg";
import imgTeam2 from "../../assets/img/team5.jpg";
import { StyledAboutUs } from "../../components/styles/AboutUs.styled";

export default function AboutUs() {
  return (
    <>
      <StyledAboutUs>
        <article>
          <br />
          <h1>Présentation de notre équipe du Studio</h1>
          <p>
            Bienvenue dans notre studio de développement de jeux vidéo situé à
            Bordeaux, où la passion pour le jeu rencontre l'innovation et la
            créativité ! Notre équipe est composée de professionnels talentueux
            et dévoués, chacun apportant une expertise unique pour donner vie à
            des expériences de jeu captivantes.
          </p>
          <br />

          <h2>Notre Équipe</h2>
          <br />

          <img src={imgTeam} alt="" className="team-img" />

          <h3>Les Designers de Jeux</h3>
          <p>
            Nos designers sont les architectes de l'expérience ludique. Ils
            imaginent des mécaniques de jeu innovantes et créent des mondes
            immersifs qui captivent les joueurs. Leur créativité sans limites et
            leur compréhension des tendances du marché nous permettent de
            concevoir des jeux qui se démarquent.
          </p>
          <br />

          <h3>Les Développeurs</h3>
          <p>
            Nos développeurs sont les magiciens derrière le code. Spécialisés
            dans divers langages et technologies, ils transforment les idées en
            réalité. Que ce soit pour le gameplay, l'intelligence artificielle
            ou l'optimisation des performances, leur expertise technique
            garantit des jeux fluides et engageants.
          </p>
          <br />

          <img src={imgTeam2} alt="" className="team-img team-img2" />

          <h3>Les Artistes</h3>
          <p>
            Notre équipe artistique est responsable de l'esthétique de nos jeux.
            Des graphistes aux animateurs, chaque membre contribue à créer des
            visuels époustouflants qui plongent les joueurs dans des univers
            uniques. Leur sens du détail et leur passion pour l'art numérique
            font de chaque projet une œuvre d'art.
          </p>
          <br />

          <h3>Les Compositeurs et Sound Designers</h3>
          <p>
            La musique et le son jouent un rôle crucial dans l'immersion des
            joueurs. Nos compositeurs et sound designers travaillent main dans
            la main pour créer des bandes sonores mémorables et des effets
            sonores qui enrichissent l'expérience de jeu.
          </p>
          <br />

          <h3>Les Testeurs</h3>
          <p>
            Avant le lancement de chaque jeu, notre équipe de testeurs s'assure
            que tout fonctionne parfaitement. Ils identifient les bugs, évaluent
            l'expérience utilisateur et fournissent des retours précieux pour
            garantir que nos jeux répondent aux attentes des joueurs.
          </p>
          <br />

          <h1 className="wip">
            ⚒ A faire : slider de chaque membre de l'équipe
          </h1>
          <br />

          <h2>Notre Vision</h2>
          <p>
            Nous croyons que les jeux vidéo ont le pouvoir de rassembler les
            gens, de raconter des histoires et d'offrir des expériences
            inoubliables. Notre mission est de créer des jeux qui inspirent,
            divertissent et laissent une empreinte durable dans l'esprit des
            joueurs.
          </p>
          <br />

          <p>
            Rejoignez-nous dans cette aventure passionnante et découvrez les
            mondes que nous avons créés pour vous !
          </p>
        </article>
      </StyledAboutUs>
    </>
  );
}
